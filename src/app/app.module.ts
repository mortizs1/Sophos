import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Rutas
import { routing, appRoutingProviders } from './app.routing'

//Componentes
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product.component';
import { FailComponent } from './components/fail.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    FailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing

  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
