import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable()
export class FirebaseStoreProvider {

  constructor(public afs: AngularFirestore) {
    console.log('Hello FirebaseStoreProvider Provider');
  }

  listAnnouncer(){
  	// return this.afs.collection('/announcer').valueChanges();
    return this.afs.collection('/announcer').snapshotChanges().map(actions => {
      return actions.map( item=> {
      	console.log(item);
        const id = item.payload.doc.id;
        const data = item.payload.doc.data();
        data['id'] = id;
        return data;
      });
    });
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