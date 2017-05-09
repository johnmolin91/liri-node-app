import { Component } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'sd-feed',
  templateUrl: 'feed.component.html',
  styleUrls: ['feed.component.css']
})
export class FeedComponent {
   parameter: URLSearchParams = new URLSearchParams();
   tweets: any;

constructor(public http: Http) { }

   getTweets(searchTweet:string) {
      this.parameter.set('param1', searchTweet);
      let requestOptions = new RequestOptions();
      requestOptions.search = this.parameter;
      
      return this.http.get('http://localhost:3000/tweets', requestOptions)
        .map((res: Response) => res.json())
        .subscribe((res: any) => {
          this.tweets = res;
        });
    }
 }