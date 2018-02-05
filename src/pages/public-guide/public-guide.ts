import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides, ModalController} from 'ionic-angular';
import {HomePage} from '../home/home';
import {PublicRegisteredPage} from "../public-registered/public-registered";
import {PublicLoginPage} from "../public-login/public-login";
/**
 * Generated class for the PublicGuidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-public-guide',
    templateUrl: 'public-guide.html',
})
export class PublicGuidePage {
    @ViewChild(Slides) slides: Slides;

    constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PublicGuidePage');
        this.videoProcessing();
    }

    GoRegistered() {
        // this.navCtrl.push(HomePage);
        let modal = this.modalCtrl.create(PublicRegisteredPage);
        modal.present();
    }

    GoLogin() {
        let modal = this.modalCtrl.create(PublicLoginPage);
        modal.present();
    }
    GoHome(){
        this.navCtrl.push(HomePage);
    }
    videoProcessing() {
        let owner = this;
        let video_bgvid = document.getElementById("bgvid");
        let oimg = document.getElementById("oimg");

        getVideoProgress();
        function getVideoProgress() {

            setTimeout(function () {
                let current_Time = (<HTMLVideoElement>document.getElementById("bgvid")).currentTime;
                if (parseInt(current_Time.toFixed(1)) == 3) {
                    oimg.style.display = "none";
                    video_bgvid.style.zIndex = "-100";
                    owner.slideChanged();
                    return false;
                }
                // console.log(current_Time);
                getVideoProgress();
            }, 50);
        }

        // video_bgvid.addEventListener('ended', function () {
        //     owner.slideChanged()
        // }, false);
    }

    slideChanged() {
        let currentIndex = this.slides.getActiveIndex();
        let btn1 = document.getElementById("btn1");
        let btn2 = document.getElementById("btn2");
        let btn3 = document.getElementById("btn3");
        let btn4 = document.getElementById("btn4");
        // console.log('Current index is', currentIndex);
        switch (currentIndex) {
            case 0 :
                btn1.classList.add("animated");
                btn1.classList.add("swing");

                btn2.classList.remove("swing");
                btn3.classList.remove("swing");
                btn4.classList.remove("swing");
                break;
            case 1 :
                btn1.classList.remove("swing");
                btn3.classList.remove("swing");
                btn4.classList.remove("swing");

                btn2.classList.add("animated");
                btn2.classList.add("swing");
                break;
            case 2 :
                btn1.classList.remove("swing");
                btn2.classList.remove("swing");
                btn4.classList.remove("swing");

                btn3.classList.add("animated");
                btn3.classList.add("swing");
                break;
            case 3 :
                btn1.classList.remove("swing");
                btn2.classList.remove("swing");
                btn3.classList.remove("swing");

                btn4.classList.add("animated");
                btn4.classList.add("swing");
                break;
            default:
                break;
        }
    }
}
