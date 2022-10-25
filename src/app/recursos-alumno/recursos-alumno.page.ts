import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import axios from "Axios";

@Component({
  selector: 'app-recursos-alumno',
  templateUrl: './recursos-alumno.page.html',
  styleUrls: ['./recursos-alumno.page.scss'],
})
export class RecursosAlumnoPage implements OnInit {

  pokemon = []

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon').subscribe(async res => {
      res.results.map(async ({ url, name }) => {
        const { data: { sprites: { front_default }, stats: [hp, attack, defense, specialAttack, specialDefense, speed], ...ex } } = await axios.get(url)
        console.log(hp, attack, defense, specialAttack, specialDefense, speed)
        this.pokemon.push({
          nombre: [name[0].toUpperCase(), ...name.split("").slice(1, name.length)].join(""),
          sprite: front_default
        })
      })
    })
  };

  getId(id) {

  }
}
