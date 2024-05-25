import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    console.log(this.authService.verificar());
  }
  userHasRole(){
    return this.authService.verificar();
  }
  cerrar() {
    sessionStorage.clear();
  }
}
