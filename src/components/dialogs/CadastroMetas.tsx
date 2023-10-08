import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from "react";
import { Slider, Typography } from '@mui/material';
import MetaService from "../../services/MetaService";
import { useAlert } from '../Alert';


export default function CadastroMetasDialog(props: any) {
    const { showAlert } = useAlert();
    const [meta, setMeta] = useState(props.novaMeta);

    const handleClose = () => {
        props.onClose();
    };

    const marks = [
        {
            value: 0,
            label: '0',
        },
        {
            value: 25,
            label: '20',
        },
        {
            value: 50,
            label: '50',
        },
        {
            value: 75,
            label: '75',
        },
        {
            value: 100,
            label: '100',
        },
    ];

    const handleSave = async () => {
        try {
            const response = await MetaService.postMetas(meta);

            if (response.status === 201) {
                showAlert('Salvo com sucesso!', 'success');
                handleClose();
                props.handleUpdateList(meta);
            } else {
                showAlert('Ocorreu um erro, tente novamente!', 'error');
            }

        } catch (error) {
            console.error('Erro ao buscar metas:', error);
        }
    };

      const handleEventChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value : any = event.target.value;

        const id = event.target.id;
        const type = event.target.type;

        if (type == "number"){
           value = Number(value);
        }

        setMeta({
            ...meta,
            [id]: value,
        });
    };

    const handleSliderPontos = (event: Event, newValue: number | number[]) => {
        setMeta({
            ...meta,
            ['pontos']: newValue,
        });
    };



    return (
        <div>
            <Dialog open={props.open} onClose={handleClose}>
                <DialogTitle>Adicionar nova Meta</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Para adicionar uma nova meta, preencha os dados a seguir. Importante: a duração inicia-se imediatamente após o cadastro.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="titulo"
                        label="Título"
                        type="text"
                        fullWidth
                        variant="filled"
                        value={meta.titulo}
                        onChange={handleEventChange}
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="descricao"
                        label="Descrição"
                        type="text"
                        fullWidth
                        variant="filled"
                        multiline
                        maxRows={4}
                        value={meta.descricao}
                        onChange={handleEventChange}
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="duracao"
                        label="Duração (em dias)"
                        type="number"
                        fullWidth
                        variant="filled"
                        value={meta.duracao}
                        onChange={handleEventChange}
                    />

                    <Typography id="input-slider-pontos" gutterBottom>
                        Pontos
                    </Typography>

                    <div className="ml-8 mr-8" >
                    <Slider
                        id="pontos"
                        aria-labelledby="input-slider-pontos"
                        aria-label="Custom marks"
                        defaultValue={0}
                        step={5}
                        valueLabelDisplay="auto"
                        marks={marks}
                        value={meta.pontos}
                        onChange={handleSliderPontos}
                    />

                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={handleSave}>Salvar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}