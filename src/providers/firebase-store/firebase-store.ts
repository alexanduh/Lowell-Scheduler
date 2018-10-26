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
	      "Department Number": value.departmentNumber,
	      "Block": value.block,
	      "Course Code": value.courseCode,
	      "Course Name": value.courseName,
	      "Room": value.room,
	      "Section Number": value.sectionNumber,
	      "Teacher": value.teacher
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