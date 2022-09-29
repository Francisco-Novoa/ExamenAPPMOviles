import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController, AnimationController, createAnimation } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { users } from "./users.js"
import { AuthenticationService } from '../service/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private navCtrl: NavController,
    private router: Router,
    private alertController: AlertController,
    private animationCtrl: AnimationController,
    private authService: AuthenticationService) {
  }

  isUsuario = false
  isValid = false;
  isProfe = false;
  usuario = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    pass: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
  });

  sendDetailsWithState() {
    const user = this?.usuario?.value?.user || ""
    this.isUsuario = !!users[user]
    this.isValid = this.isUsuario ? users[user]?.pass === this?.usuario?.value?.pass : false
    this.isProfe = users[user]?.type === "docente"

    let navigationExtras: NavigationExtras = {
      state: {
        user: this.usuario.value.user || "",
        isProfe: this.isProfe
      }
    };
    console.log(this.isProfe)
    if (this.isProfe) {
      console.log("to the profe page")
      this.router.navigate(['/docente'], navigationExtras);
    } else {
      this.router.navigate(['/home'], navigationExtras);
    }
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
    if (6 <= (this.usuario.value.user).length) {
      this.sendDetailsWithState();
    } else {
      this.presentAlert();
    }
  }

  goToNoPass() {
    this.toChangePass();
  }
}
