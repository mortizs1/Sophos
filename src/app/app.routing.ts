import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { ProductComponent } from './components/product.component';
import { FailComponent } from './components/fail.component';

const appRoutes: Routes = [
    { path: '', component: ProductComponent },
    { path: 'products', component: ProductComponent },
    { path: '**', component: FailComponent }
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)
