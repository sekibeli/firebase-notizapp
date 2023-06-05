import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData, doc, setDoc, getDoc, DocumentSnapshot, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-note-input',
  templateUrl: './note-input.component.html',
  styleUrls: ['./note-input.component.scss']
})
export class NoteInputComponent {
  firestore: Firestore = inject(Firestore);
  title = '';
  description = '';
  docIDs = [];
docID;
  constructor(){
    
  }

  async addNote(){

    const coll = collection(this.firestore, 'notes');
    const note = {title: this.title , description: this.description};
    const docRef = doc(coll);
 
    addDoc(coll, note)
    .then((docRef)=> {
     this.docID = docRef.id;
      console.log(this.docID);
      console.log();
    })
    console.log(note);
    

    // const coll = collection(this.firestore, 'notes');
    // const note = {title: this.title , description: this.description};
    // const docRef = doc(this.firestore, 'notes');
    // console.log(docRef);
    // await setDoc(doc(coll), note);

    // const snapshot = await getDoc(docRef);
    // const documentID = snapshot.id;
    // this.docIDs.push(documentID);
    // console.log('Dokument ID: ', documentID);

    


    this.title = '';
    this.description = '';

  }
}
