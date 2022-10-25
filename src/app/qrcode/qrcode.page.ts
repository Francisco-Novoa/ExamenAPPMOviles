import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QrcodePage implements OnInit {
  // qr  es la direccion para la imagen qr
  qr = ''
  //lista de alumnos pokemon
  alumnos = []
  //estado del alumno  presente o ausente
  estadoActual = ''
  //id del pokemon
  id = 0

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    //creacion de un id ramdom entre 1 y 151 para el codigo qr
    this.id = Math.floor(Math.random() * 151) + 1;
    // creacion de la url para mostrar en el qr con el id creado anteriormente
    this.qr = "https://www.pokemon.com/el/pokedex/" + this.id
    //cliclo for para crear una lista de alumnos
    for (let i = 1; i <= 12; i++) {
      //creacion de id del alumno
      this.id = Math.floor(Math.random() * 151) + 1;
      //peticion a la api pokemon por id creado
      this.http.get<any>('https://pokeapi.co/api/v2/pokemon/' + this.id)
        .subscribe(res => {
          //creacion del estado, por defecto success como presente (le da color verde al icono)
          this.estadoActual = 'success'
          //si el id del alumnos es impar, se le asigna un estado danger (color rojo al icono)
          if (res.id % 2 == 0) {
            this.estadoActual = 'danger';
          }
          //se crea un array con la informacion a utilizar del alumno, nombre, foto y estado
          this.alumnos.push([res.name, res.sprites.front_default, this.estadoActual]);
        })
    }
  }

}
