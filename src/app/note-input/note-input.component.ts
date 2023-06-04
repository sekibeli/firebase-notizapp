import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData, doc, setDoc } from '@angular/fire/firestore';
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

  addNote(){
    const coll = collection(this.firestore, 'notes');
    setDoc(doc(coll), {title: this.title , description: this.description})

    this.title = '';
    this.description = '';

  }
}
