import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { INote } from '../models/note.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private firestore: Firestore) { }


  addNote(note: INote){
    const notesRef = collection(this.firestore, 'notes');
    return addDoc(notesRef, note)
  }

  getNotes(): Observable<INote[]>{
    const notesRef = collection(this.firestore, 'notes');
    return collectionData(notesRef, {idField:'id'}) as Observable<INote[]>;
  }

  deleteNote(note: INote){
    const noteDocRef = doc(this.firestore, `notes/${note.id}`);
    return deleteDoc(noteDocRef);
  }
}
