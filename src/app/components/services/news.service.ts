import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class NewsService{

    constructor( private http: HttpClient ){
    }

    getRepos(){
        return this.http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=5bd232cf57b94b81bb7b062240d18ec4')
        .toPromise();
    }
}