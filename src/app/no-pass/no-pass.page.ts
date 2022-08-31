import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController, AnimationController, createAnimation } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-pass',
  templateUrl: './no-pass.page.html',
  styleUrls: ['./no-pass.page.scss'],
})
export class NoPassPage {

  recovery = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
  });

  constructor(private navCtrl: NavController,
    private router: Router,
    private alertController: AlertController,
    private animationCtrl: AnimationController) { }

  toLogin() {
    this.router.navigate(['/login']); // Esta linea es la que me permite navegar a otro page 
  }
}
