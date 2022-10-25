import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController, AnimationController, createAnimation } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { UserService } from '../api/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private navCtrl: NavController,
    private router: Router,
    private alertController: AlertController,
    private UserService: UserService,
    private animationCtrl: AnimationController) {
  }

  isUsuario = false
  isValid = false;
  isProfe = false;
  usuario = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    pass: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
  });

  sendDetailsWithState() {
    this.isUsuario = this.UserService.userExists({ user: this.usuario?.value?.user || "" })
    this.isValid = this.UserService.validate({ user: this.usuario?.value?.user || "", pass: this.usuario?.value?.pass || "" })
    this.isProfe = this.UserService.isProfe({ user: this.usuario?.value?.user || "" })
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.usuario.value.user || "",
        isProfe: this.isProfe
      }
    };
    if this.UserService.(this.isProfe) {
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
