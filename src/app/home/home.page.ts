import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController, AnimationController, createAnimation } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { MenuController } from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  nombre: string;
  userHome = "Alumno Duoc";
  isProfe = false;
  emailUser = this.userHome.split("").map(a => a != " " ? a.toLowerCase() : "").join("");
  constructor(private menuCtrl: MenuController, private activeroute: ActivatedRoute, private router: Router, private alertController: AlertController) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.userHome = this.router.getCurrentNavigation().extras.state.user;
        this.isProfe = this.router.getCurrentNavigation().extras.state.isProfe;
        this.emailUser = this.userHome.split("").map(a => a != " " ? a.toLowerCase() : "").join("");
      }
    });

  }
  ngOnInit() {

  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  camaraAnimation() {
    const animation = createAnimation()
      .addElement(document.querySelector('#cuadrado'))
      .duration(1000)
      .keyframes([
        { offset: 0, background: 'red' },
        { offset: 0, transform: 'scale(1)', opacity: '1' },
        { offset: 0.5, transform: 'scale(1.2)', opacity: '0.3' },
        { offset: 1, transform: 'scale(1)', opacity: '1' }
      ])
    animation.play();
  }

  cerrarAnimation() {
    const animation = createAnimation()
      .addElement(document.querySelector('#cuadrado2'))
      .duration(1000)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2')
      .duration(1000)
      .fromTo('transform', 'translateX(100px)', 'translateX(0px)')
      .fromTo('opacity', '0.2', '1');
    animation.play();
    this.router.navigate(['/login'])
  }
}
