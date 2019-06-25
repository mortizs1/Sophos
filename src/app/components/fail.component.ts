import { Component, OnInit } from "@angular/core";

@Component({
    selector: "fail",
    templateUrl: "../views/fail.html"
})

export class FailComponent {
    public titulo: string;

    constructor() {
        this.titulo = "Página no encontrada - 404";
    }

    ngOnInit() {
        console.log('Se ha cargado el componente Fail.component.ts');
    }
}