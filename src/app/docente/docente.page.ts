import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';
import { AlertController, NavController, AnimationController, createAnimation } from '@ionic/angular';
import { UserService } from '../api/user.service';
@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {

  constructor(private router: Router,
              private UserService: UserService) { }

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


