import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class FirebaseStoreProvider {

  constructor(public afs: AngularFirestore) {
    console.log('Hello FirebaseStoreProvider Provider');
  }

  listAnnouncer(){
    return this.afs.collection('/announcer').valueChanges();
  }

	addClass(value){
	  return new Promise<any>((resolve, reject) => {
	    this.afs.collection('/announcer').add({
	      "Department Number": value["Department Number"],
	      "Block": value["Block"],
	      "Course Code": value["Course Code"],
	      "Course Name": value["Course Name"],
	      "Room": value["Room"],
	      "Section Number": value["Section Number"],
	      "Teacher": value["Teacher"]
	    })
	    .then(
	      (res) => {
	        resolve(res)
	      },
	        err => reject(err)
	    )
	  })
	}

}