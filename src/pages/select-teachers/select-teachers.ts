import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseStoreProvider } from '../../providers/firebase-store/firebase-store'
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/rx';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the SelectTeachersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-select-teachers',
  templateUrl: 'select-teachers.html',
})
export class SelectTeachersPage {

	selectedList: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.selectedList = navParams.get('selectedList');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectTeachersPage');
  }

  showClasses() {
	console.log(this.selectedList);
  }
}
