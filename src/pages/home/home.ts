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
  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseStoreProvider, public http: HttpClient) {
    this.announcer = firebaseProvider.listAnnouncer();
}

	nextPage() {
		var selectedClasses = [];
		this.http.get('assets/data/announcer.json').subscribe(data => {
			for(var x of this.announcer) {
				if(x.selected == true) {
					selectedClasses.push(x);
				}
			}
		}
		
		
		console.log(selectedClasses);
		//this.navCtrl.push("SelectTeachersPage");
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






