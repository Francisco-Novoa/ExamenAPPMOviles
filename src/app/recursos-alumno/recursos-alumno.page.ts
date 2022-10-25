import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recursos-alumno',
  templateUrl: './recursos-alumno.page.html',
  styleUrls: ['./recursos-alumno.page.scss'],
})
export class RecursosAlumnoPage implements OnInit {

  pokemon =[]

  

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon').subscribe(res => {
      console.log(res);
      this.pokemon = res.results;
    })
  };

  getId(id){

  }
}
