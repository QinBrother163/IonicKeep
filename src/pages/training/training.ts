import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Slides } from 'ionic-angular';
import {SearchPage} from "../search/search";

declare var Swiper;
/**
 * Generated class for the TrainingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-training',
  templateUrl: 'training.html',
})

export class TrainingPage {
  swiper: any;
  @ViewChild('contentSlides1') contentSlides: Slides;
  items: Array<any> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 0, 1, 2, 3, 4, 5, 6, 7, 8, 0, 1, 2, 3, 4, 5, 6, 7, 8];
  menus: Array<string> = ["训练", "跑步", "行走", "骑行"];

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab3Page');
    this.initSwiper();
  }

  initSwiper() {
    this.swiper = new Swiper('#pageMenuSlides1 #swiper-container1', {
      slidesPerView: 5,
      spaceBetween: 0,
      breakpoints: {
        1024: {
          slidesPerView: 5,
          spaceBetween: 0
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 0
        },
        640: {
          slidesPerView: 5,
          spaceBetween: 0
        },
        320: {
          slidesPerView: 5,
          spaceBetween: 0
        }
      }
    });
  }

  selectPageMenu($event, index) {
    this.setStyle(index);
    this.contentSlides.slideTo(index);
  }
  slideChanged() {
    let index = this.contentSlides.getActiveIndex();
    this.setStyle(index);
    this.swiper.slideTo(index, 300);
  }

  setStyle(index) {
    var slides = document.getElementById('pageMenuSlides1').getElementsByClassName('swiper-slide');
    if (index < slides.length) {
      for (var i = 0; i < slides.length; i++) {
        var s = slides[i];
        s.className = "swiper-slide";
      }
      slides[index].className = "swiper-slide bottomLine";
    }
  }
  goSearchPage(){
    this.navCtrl.push(SearchPage);
  }

}
