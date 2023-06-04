import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData, getDoc, getFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { deleteDoc, doc } from '@firebase/firestore';

import { Action } from 'rxjs/internal/scheduler/Action';



@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  notes$: Observable<any>;
  notes: Array<any>;
  firestore: Firestore = inject(Firestore);
  db = getFirestore();
  title = '';
  description = '';
  collRef;
  


  

  constructor() {
    const coll = collection(this.firestore, 'notes');
    this.notes$ = collectionData(coll);

    this.notes$.subscribe((allNotes) => {
      console.log('Aktuelle Memos: ', allNotes);
      this.notes = allNotes;
    
        });

    
  }

  async deleteNote(documentId, index) {
    const db = getFirestore();

  }}
















  
    // console.log(db);
    // const collRef = doc(db, "notes", `${documentId}`);
    

   
    

    // deleteDoc(collRef)
    // .then(() => {
    //   console.log('Dokument erfolgreich gelöscht!');
    //   this.notes.splice(index, 1); // Entfernt das gelöschte Element aus der Anzeige
     
    // })
    // .catch((error) => {
    //   console.error('Fehler beim Löschen des Dokuments:', error);
    // });

    
    // await deleteDoc(doc(this.collRef, documentId['title'], documentId['description']));

    
   

    //  deleteDoc(doc(this.coll, documentId.title, documentId.description));

    // await deleteDoc(doc(this.coll, documentId['title'], documentId['description']))

    // await deleteDoc(doc(collRef[i]))

    // this.coll.doc(this.notes[i]).delete();

    // deleteDoc(this.coll[i]);

    // this.collRef.doc(documentId).delete()
    //   .then(() => {
    //     console.log('Dokument erfolgreich gelöscht!');
    //   })
    //   .catch((error) => {
    //     console.error('Fehler beim Löschen des Dokuments:', error);
    //   });
  
