import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController, AnimationController, createAnimation } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  usuario = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    pass: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
  });


  constructor(private navCtrl: NavController,
    private router: Router,
    private alertController: AlertController,
    private animationCtrl: AnimationController) { }

  sendDetailsWithState() {
    let navigationExtras: NavigationExtras = {
      state: { user: this.usuario.value.user || "" }
    };
    this.router.navigate(['/home'], navigationExtras); // Esta linea es la que me permite navegar a otro page 
  }

  toChangePass() {
    this.router.navigate(['/no-pass']); // Esta linea es la que me permite navegar a otro page 
  }

  //Metodo de alerta 
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error Login',
      subHeader: 'Infomación : ',
      message: 'El usuario o contraseñana ingresados no son correctos.',
      buttons: ['Aceptar'],
    });
    await alert.present();
  }

  //Metodo para navegar desde un metodo llamado desde el html
  goToPagina2() {
    if (3 < (this.usuario.value.user).length) {
      this.sendDetailsWithState();
    } else {
      this.presentAlert();
    }
  }


  goToNoPass() {
    this.toChangePass();
  }
}
