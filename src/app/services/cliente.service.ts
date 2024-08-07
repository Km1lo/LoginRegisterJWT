import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private cliente: Cliente | null = null;

  constructor() { }

  setCliente(cliente: Cliente): void {
    this.cliente = cliente;
  }

  getCliente(): Cliente | null {
    return this.cliente;
  }
}