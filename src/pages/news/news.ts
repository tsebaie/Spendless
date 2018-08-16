import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {RssProvider} from '../../providers/rss/rss';
import {NewsViewPage} from '../news-view/news-view';
import viewed from '../../app/tshepo';


/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  url: string;
  data: string;

  title;
  image;
  description;
  arr=[];
  author;
source;
publishedAt;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public rssprovider: RssProvider) {
  
  this.rssprovider.getNews().then((data:any)=>{
    console.log(data);
    for(var i=0; i < 10 ; i++){
      this.arr.push(data.articles[i]);
    }
    
  })
  }
view(i){
  this.rssprovider.getNews().then((data:any)=>{
    viewed[0] = (data.articles[i]);
    this.navCtrl.push(NewsViewPage);
  })
}

}
