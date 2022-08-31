import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toQrcode() {

    this.router.navigate(['/qrcode']); // Esta linea es la que me permite navegar a otro page 
  }

}


