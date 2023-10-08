class Meta {
    id: number;
    titulo: string;
    descricao: string;
    duracao: number;
    pontos: number;

    constructor() {
        this.id = 0;
        this.titulo = '';
        this.descricao = '';
        this.duracao = 0;
        this.pontos = 0;
    }
}

export default Meta;