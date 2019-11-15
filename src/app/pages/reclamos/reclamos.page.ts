import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-reclamos',
  templateUrl: './reclamos.page.html',
  styleUrls: ['./reclamos.page.scss'],
})
export class ReclamosPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  onClick() {
    this.navCtrl.navigateRoot('index');
  }

}
