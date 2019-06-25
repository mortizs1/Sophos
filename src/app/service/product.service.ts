import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import 'rxjs/add/operator/map';
import { Cliente } from '../models/client';

@Injectable()
export class ProductoService {
    public url: string;

    constructor(
        public _http: HttpClient
    ) {
        this.url = GLOBAL.url;
    }

    getProductos(): Observable<any> {
        return this._http.get(this.url, { observe: 'response' }).map(res => res);
    }

    saveCliente(client: Cliente) {
        let json = JSON.stringify(client);
        let params = 'json' + json;
    }
}