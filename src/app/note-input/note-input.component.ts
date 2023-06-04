import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData, doc, setDoc, getDoc, DocumentSnapshot } from '@angular/fire/firestore';
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

  constructor(){
    
  }

  async addNote(){

    const coll = collection(this.firestore, 'notes');
    const note = {title: this.title , description: this.description};
    const docRef = doc(coll);
    setDoc(doc(coll), note)

    // const coll = collection(this.firestore, 'notes');
    // const note = {title: this.title , description: this.description};
    // const docRef = doc(this.firestore, 'notes');
    // console.log(docRef);
    // await setDoc(doc(coll), note);

    const snapshot = await getDoc(docRef);
    const documentID = snapshot.id;
    console.log('Dokument ID: ', documentID);

    


    this.title = '';
    this.description = '';

  }
}
