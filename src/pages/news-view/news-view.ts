import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import {RssProvider} from '../../providers/rss/rss';
import viewed from '../../app/tshepo';
import {HomePage} from '../../pages/home/home';

/**
 * Generated class for the NewsViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-view',
  templateUrl: 'news-view.html',
})
export class NewsViewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsViewPage');
  }
  article = viewed;


  Sub(){
    this.navCtrl.push(HomePage);
  }
}
