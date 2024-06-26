export class HistmovimientoDTO {
    constructor(
        public nombrecompleto: string,
        public fecha: Date,
        public descripcion: string,
        public subtotal: number,
        public tasa_text: string,
        public tasa_num: number,
        public cuotas: number,
        public capitalizacion: number,
        public renta: number | null,
        public totalAPagar: number | null,
        public diasTrasladar: number | null,
        public valorFuturo: number | null,
        public interes: number | null,
        public estado: string,
    ) {}
}
