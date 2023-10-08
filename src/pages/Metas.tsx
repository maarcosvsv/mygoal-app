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
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CadastroMetasDialog from '../components/dialogs/CadastroMetas'
import Meta from '../components/classes/Meta'

const columns = [
    { field: 'id', headerName: 'Nº', width: 10 },
    { field: 'titulo', headerName: 'Título', width: 200 },
    { field: 'descricao', headerName: 'Descrição', width: 500 },
    {
        field: 'pontos',
        headerName: 'Pontos',
        type: 'number',
        width: 90,
    },
    {
        field: 'duracao',
        headerName: 'Duração',
        description: 'This column has a value getter and is not sortable.',
        type: 'number',
        width: 90,
    },
    { field: 'dt_criacao', headerName: 'Criado em', width: 200 },
    { field: 'atribuicoes', headerName: 'Total atribuído', width: 130 },
];

export default function Metas() {

    const [metas, setMetas] = useState<Meta[]>([]);
    const [openCadastroMeta, setOpenCadastroMeta] = React.useState(false);
    const [novaMeta, setNovaMeta] = useState(new Meta());

    useEffect(() => {

        const fetchMetas = async () => {
            try {
                const data = await MetaService.getMetas();
                setMetas(data);
            } catch (error) {
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
                    <Card className="mb-2">
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                                    <BookmarkIcon />
                                </Avatar>
                            }
                            title="Metas Profissionais"
                            subheader="Representa o processo pelo qual os funcionários registram suas metas cumpridas diariamente relacionadas à carreira ou ao trabalho."
                        />
                    </Card>

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
                                            paginationModel: { page: 0, pageSize: 5 },
                                        },
                                    }}
                                    pageSizeOptions={[5, 10]}
                                    checkboxSelection
                                />
                            </Item>
                        </Grid>

                    </Grid>
                </Container>


            </div>

        </div>
    )
}

