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
	announcerArray: any;
	announcerFiltered: any;
	announcer: Observable<any[]>;
	selectedList: any;
	constructor(public navCtrl: NavController, public firebaseProvider: FirebaseStoreProvider, public http: HttpClient) {
		this.announcer = firebaseProvider.listAnnouncer();
		this.selectedList = [];
		this.announcerArray = [];
		this.announcer.subscribe(item => {
			this.announcerArray = [];
			item.map(c => {
				this.announcerArray.push(c);
			})
		this.announcerFiltered = this.announcerArray;
		});

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

	filterClass(ev: any) {
		this.announcerFiltered = this.announcerArray;
		const val = ev.target.value;
		if(val && val.trim() != '') {
			this.announcerFiltered = this.announcerFiltered.filter((item) => {
				console.log(item);
				return(
					(item["Course Name"] && item["Course Name"].toLowerCase().indexOf(val.toLowerCase()) > -1) ||
					(item["Teacher"] && item["Teacher"].toLowerCase().indexOf(val.toLowerCase()) > -1) || 
					(item["Block"] && item["Block"].toLowerCase().indexOf(val.toLowerCase()) > -1)
					);
			});
		}
	}

	nextPage() {
		this.navCtrl.push("SelectTeachersPage", {
			"selectedList": this.selectedList
		}); 
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






