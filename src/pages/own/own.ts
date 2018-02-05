import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ZBar, ZBarOptions } from '@ionic-native/zbar';

import { OwnNavMessagePage } from '../own-nav-message/own-nav-message';
import { OwnNavConfigurationPage } from '../own-nav-configuration/own-nav-configuration';
/**
 * Generated class for the OwnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-own',
  templateUrl: 'own.html',
})
export class OwnPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private zbar: ZBar) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OwnPage');
  }
  scan() {
    let options: ZBarOptions = {
      flash: 'off',
      text_title: '扫码',
      drawSight: false
    };

    this.zbar.scan(options)
        .then(result => {
          console.log("结果：" + result); // Scanned code
        })
        .catch(error => {
          console.log("Error : " + error); // Error message
        });
  }
  Go_ownMessage(){
    this.navCtrl.push(OwnNavMessagePage);
  }
  Go_ownConfiguration(){
    this.navCtrl.push(OwnNavConfigurationPage);
  }
}
