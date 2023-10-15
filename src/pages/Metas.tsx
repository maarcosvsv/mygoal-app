import React, {useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import MetaService from '../services/MetaService';
import {Box, Container, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import Item from "../components/Item"
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CadastroMetasDialog from '../components/dialogs/CadastroMetas'
import Meta from '../components/classes/Meta'
import { useAlert } from '../components/Alert';
import PagesHeader from '../components/PagesHeader'
import Chip from '@mui/material/Chip';
import StarIcon from '@mui/icons-material/Star';
import ProgressBar from '../components/ProgressBar'

const openViewMeta = (id: any) => {
    console.log("Open meta: " + id);
};

const columns = [
    {
        field: 'pontos',
        headerName: 'Pontos',
        type: 'text',
        width: 120,
        renderCell: (params: any) => (
            <Chip icon={<StarIcon />} label={params.value + " XP"}  color="warning" variant="outlined" className="min-w-[90px]" />
        ),
    },
    { field: 'titulo', headerName: 'Título', width: 200 },
    { field: 'descricao', headerName: 'Descrição', flex: 1},


    { field: 'dataCriacao', headerName: 'Criado em', width: 120,
        renderCell: (params: any) => {
            const partes = params.value.split(' '); // Divide a string em partes separadas por espaço
            const dataFormatada = partes.length > 0 ? partes[0] : " -- ";
            return dataFormatada;
        }

    },
    {
        field: 'diasRestantes',
        headerName: 'Duração',
        type: 'text',
        align: 'center',
        width: 140,
        renderCell: (params: any) => (

            <ProgressBar valorAtual={params.value} valorTotal={params.row.duracao} />

        ),
    }
];

export default function Metas() {
    const { showAlert } = useAlert();

    const [metas, setMetas] = useState<Meta[]>([]);
    const [openCadastroMeta, setOpenCadastroMeta] = React.useState(false);
    const [novaMeta, setNovaMeta] = useState(new Meta());


    useEffect(() => {

        const fetchMetas = async () => {
            try {
                const data = await MetaService.getMetas();
                console.log(data);
                setMetas(data);
            } catch (error) {
                showAlert('Não foi possível carregar as Metas!', 'error');
                console.error('Erro ao buscar metas:', error);
            }
        };

        fetchMetas();
    }, []);


    const handleAdicionarMeta = () => {
        setNovaMeta(new Meta());
        setOpenCadastroMeta(true);
    };

    const handleOpenCadastroMeta = () => {
        setOpenCadastroMeta(false);
    };

    const handleUpdateList = (metaSaved: Meta) => {
        setMetas([...metas, metaSaved]);
        console.log(metaSaved);
    };




    return (
        <div>
            <Navbar />
            <CadastroMetasDialog open={openCadastroMeta} onClose={handleOpenCadastroMeta} novaMeta={novaMeta} handleUpdateList={handleUpdateList}  />

            <div className="mx-auto mt-4 mb-4">

                <Container maxWidth="xl">
                    <PagesHeader icon={<BookmarkIcon />} title="Metas Profissionais" subHeader="Representa o processo pelo qual os funcionários registram suas metas cumpridas diariamente relacionadas à carreira ou ao trabalho." />

                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                <nav aria-label="main mailbox folders">
                                    <List>
                                        <ListItem disablePadding>
                                            <ListItemButton onClick={handleAdicionarMeta}>
                                                <ListItemIcon>
                                                    <BookmarkAddIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Adicionar nova" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <EditIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Editar" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <PersonAddAlt1Icon />
                                                </ListItemIcon>
                                                <ListItemText primary="Atribuir funcionário" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <PersonOffIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Limpar atribuições" />
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </nav>
                                <Divider />
                                <nav aria-label="secondary mailbox folders">
                                    <List>
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <DeleteForeverIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Excluir" />
                                            </ListItemButton>
                                        </ListItem>

                                    </List>
                                </nav>
                            </Box>
                        </Grid>

                        <Grid item xs={10}>
                            <Item>
                                <DataGrid
                                    rows={metas}
                                    columns={columns}
                                    initialState={{
                                        pagination: {
                                            paginationModel: { page: 0, pageSize: 10 },
                                        },
                                    }}
                                    pageSizeOptions={[5, 10]}

                                    sx={{
                                        boxShadow: 0,
                                        border: 0,
                                        borderColor: 'primary.light',
                                        '& .MuiDataGrid-cell:hover': {
                                            color: 'primary.main',
                                        },
                                    }}
                                />
                            </Item>
                        </Grid>

                    </Grid>
                </Container>


            </div>

        </div>
    )
}

