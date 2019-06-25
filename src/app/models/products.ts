export class Producto {
    constructor(
        public descr: string,
        public canti: number,
        public image: string,
        public imageSmall: string,
        public id: number,
        public categoria: string,
        public precio: number,
    ) { }
}