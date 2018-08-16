import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the RssProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const API: string = "https://newsapi.org/v2/top-headlines?sources=news24&apiKey=0c4e410cf98d47ea8c328ac2b8481c0e";

@Injectable()
export class RssProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RssProvider Provider');
  }
getNews(){
  return new Promise ((resolve,reject)=>
{this.http.get(API).subscribe(data=>{
resolve(data);

})

});
}
}
