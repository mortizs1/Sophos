import { Component } from "@angular/core";
import { ProductoService } from '../service/product.service'
import { Producto } from '../models/products';
import { Cliente } from '../models/client';


@Component({
    selector: "product",
    templateUrl: "../views/product.html",
    styleUrls: ["../../assets/style.css"],
    providers: [ProductoService]
})

export class ProductComponent {
    public productos: Producto[];
    public cliente: Cliente;
    public pedidos: Array<Cliente>;

    constructor(
        private _productoService: ProductoService
    ) {
        this.cliente = new Cliente('', '', '', '', '');
    }

    ngOnInit() {
        console.log('Se ha cargado el componente Productos.component.ts');

        this._productoService.getProductos().subscribe(
            result => {
                if (result.status != 200) {
                    console.log("NO RESPONDIO BIEN EL API");
                    console.log(result)
                } else {
                    console.log(result.body);
                    this.productos = result.body;
                    console.log("Esto es lo que tiene el arreglo de productos" + this.productos);
                }
            },
            error => {
                console.log(<any>error);
            }
        )
    }

    onSubmit() {
        console.log(this.cliente);
    }
}