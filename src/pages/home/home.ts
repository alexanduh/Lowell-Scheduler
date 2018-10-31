import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseStoreProvider } from '../../providers/firebase-store/firebase-store'
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/rx';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  movies: Observable<any[]>;
  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseStoreProvider, public http: HttpClient) {
    this.movies = firebaseProvider.listAnnouncer();
  }

  addClass() {
  	this.http.get('assets/data/announcer.json').subscribe(data => {
               console.log(data);
          });
  }

}