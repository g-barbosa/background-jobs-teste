import uuid from 'uuid-random';

export class Compra {
    public readonly id!: string;
    public codigo: string;
    public valor: number;
    public data: string;
    public status: string;
    public revendedorId: string;

    constructor(props: Omit<Compra, 'id' | 'status'>, id?: string) {

        this.codigo = props.codigo;
        this.valor = props.valor;
        this.data = Date.now().toLocaleString();
        this.revendedorId = props.revendedorId;
        this.status = 'Em validação';

        if (!id) {
            this.id = uuid();
        }
    }
}