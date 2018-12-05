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
	announcer: Observable<any[]>;
	selectedList: any;
	constructor(public navCtrl: NavController, public firebaseProvider: FirebaseStoreProvider, public http: HttpClient) {
		this.announcer = firebaseProvider.listAnnouncer();
		this.selectedList = [];
	}

	selectClass(selected) {
		var index = this.selectedList.indexOf(selected);
		if(!(index > -1)) {
			this.selectedList.push(selected);
		}
		else {

			this.selectedList.splice(index, 1);
		}
		console.log(this.selectedList);
	}

	nextPage() {
		this.navCtrl.push("SelectTeachersPage"); //, {"selectedList": this.selectedList}
	}
}
		


// addClass() {
//   	this.http.get('assets/data/announcer.json').subscribe(data => {
//   				console.log(data);
//   				// for(var x of data.announcer) {
//   				// 	this.firebaseProvider.addClass(x);
//   				// 	console.log("success");				
//   				// }
//           });
//  }






