import { Component } from "@angular/core";
import { Cliente } from '../models/client';

@Component({
    selector: "list",
    templateUrl: "../views/product.html",
    styleUrls: ["../../assets/style.css"]
})


export class ListComponent {
    public cliente: Cliente;
    public pedidos: Array<Cliente>;

    constructor() {
        this.cliente = new Cliente('', '', '', '', '');
    }

    onSubmit() {
        this.pedidos.push(this.cliente);
        this.cliente = new Cliente('', '', '', '', '');
    }
}