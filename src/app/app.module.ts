import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserscreenComponent } from './components/userscreen/userscreen.component';
import { ClientesListComponent } from './components/clientes/clientes-list/clientes-list.component';
import { LandingComponent } from './components/landing/landing.component';
import { DialogAddClienteComponent } from './components/clientes/dialog-add-cliente/dialog-add-cliente.component';
import { DialogEditClienteComponent } from './components/clientes/dialog-edit-cliente/dialog-edit-cliente.component';
import { DialogAddProductoComponent } from './components/productos/dialog-add-producto/dialog-add-producto.component';
import { ProductosListComponent } from './components/productos/productos-list/productos-list.component';
import { CompraFormComponent } from './components/compra/compra-form/compra-form.component';
import { ReporteVentasComponent } from './components/ventas/reporte-ventas/reporte-ventas.component';
import { HistMovimientoComponent } from './components/hist-movimiento/hist-movimiento.component';
import { ReporteVentasEditComponent } from './components/ventas/reporte-ventas-edit/reporte-ventas-edit.component';
import { HistMovimientoEditComponent } from './components/hist-movimiento/hist-movimiento-edit/hist-movimiento-edit.component'; 


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    UserscreenComponent,
    ClientesListComponent,
    LandingComponent,
    DialogAddClienteComponent,
    DialogEditClienteComponent,
    DialogAddProductoComponent,
    ProductosListComponent,
    CompraFormComponent,
    ReporteVentasComponent,
    HistMovimientoComponent,
    ReporteVentasEditComponent,
    HistMovimientoEditComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
