import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { AlertController, NavController, AnimationController, createAnimation } from '@ionic/angular';
import { UserService } from '../api/user.service';
@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {

  nombre: string;
  userHome = "Profe Duoc";
  isProfe = false;
  emailUser = this.userHome.split("").map(a => a != " " ? a.toLowerCase() : "").join("");

  constructor(private router: Router,
    private UserService: UserService,
    private activeroute: ActivatedRoute,) {
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
    this.UserService.logout()
    this.router.navigate(['/login'])
  }
  toQrcode() {
    this.router.navigate(['/qrcode']); // Esta linea es la que me permite navegar a otro page 
  }

}


