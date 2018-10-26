import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseStoreProvider } from '../../providers/firebase-store/firebase-store'
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/rx';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  movies: Observable<any[]>;
  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseStoreProvider) {
    this.movies = firebaseProvider.listAnnouncer();
  }

}