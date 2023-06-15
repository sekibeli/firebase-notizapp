import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collection, collectionData, doc, setDoc, getDoc, DocumentSnapshot, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { NoteService } from '../services/note.service';
import { NgForm } from '@angular/forms';
import { INote } from '../models/note.model';

@Component({
  selector: 'app-note-input',
  templateUrl: './note-input.component.html',
  styleUrls: ['./note-input.component.scss']
})
export class NoteInputComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  note: INote = {title: '', description: ''};
//   title = '';
//   description = '';
//   docIDs = [];
// docID;
  constructor(private noteService: NoteService){
    
  }

  ngOnInit(){
    
  }

  onSubmit(form: NgForm){
    this.noteService.addNote(form.value)
    .then(()=> form.reset());
  }
  // async addNote(){

  //   const coll = collection(this.firestore, 'notes');
  //   const note = {title: this.title , description: this.description};
  //   const docRef = doc(coll);
 
  //   addDoc(coll, note)
  //   .then((docRef)=> {
  //    this.docID = docRef.id;
  //     console.log(this.docID);
  //     console.log();
  //   })
  //   console.log(note);
    

    // const coll = collection(this.firestore, 'notes');
    // const note = {title: this.title , description: this.description};
    // const docRef = doc(this.firestore, 'notes');
    // console.log(docRef);
    // await setDoc(doc(coll), note);

    // const snapshot = await getDoc(docRef);
    // const documentID = snapshot.id;
    // this.docIDs.push(documentID);
    // console.log('Dokument ID: ', documentID);

    


    // this.title = '';
    // this.description = '';

  }

