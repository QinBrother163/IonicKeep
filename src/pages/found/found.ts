import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Slides } from 'ionic-angular';

declare var Swiper;
/**
 * Generated class for the FoundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-found',
  templateUrl: 'found.html',
})
export class FoundPage {
  swiper: any;
  @ViewChild('contentSlides2') contentSlides: Slides;

  menus: Array<string> = ["精选", "训练", "饮食", "商场"];
  items: Array<any> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 0, 1, 2, 3, 4, 5, 6, 7, 8, 0, 1, 2, 3, 4, 5, 6, 7, 8];
  constructor(public navCtrl: NavController) {
    // document.getElementsByTagName("ion-slide").style.paddingTop=document.getElementsByTagName("ion-header");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab3Page');
    this.initSwiper();
  }

  initSwiper() {
    this.swiper = new Swiper('#pageMenuSlides2 #swiper-container2', {
      slidesPerView: 4,
      spaceBetween: 0,
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 0
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 0
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 0
        },
        320: {
          slidesPerView: 4,
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
    var slides = document.getElementById('pageMenuSlides2').getElementsByClassName('swiper-slide');
    if (index < slides.length) {
      for (var i = 0; i < slides.length; i++) {
        var s = slides[i];
        s.className = "swiper-slide";
      }
      slides[index].className = "swiper-slide bottomLine";
    }
  }

}
