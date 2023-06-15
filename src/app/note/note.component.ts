import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collection, collectionData, getDoc, setDoc, getFirestore, getDocs, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { deleteDoc } from '@firebase/firestore';
import { doc } from '@angular/fire/firestore';
import { Action } from 'rxjs/internal/scheduler/Action';
import { INote } from '../models/note.model';
import { NoteService } from '../services/note.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit{
  notes: INote[] = [];
  // notes$: Observable<any>;
  // notes: Array<any>;
  // firestore: Firestore = inject(Firestore);
  // db = getFirestore();
  // title = '';
  // description = '';
  // collRef;


  constructor(private noteService: NoteService, private modal: NgbModal) {
    // const coll = collection(this.firestore, 'notes');
    // this.notes$ = collectionData(coll);

    // this.notes$.subscribe((allNotes) => {
    //   console.log('Aktuelle Memos: ', allNotes);
    //   this.notes = allNotes;

    // });
  }
  ngOnInit(){
    this.noteService.getNotes().subscribe((note: INote[])=> {
      this.notes = note;
    })
  }


  deleteNote(note:INote){
    this.noteService.deleteNote(note)
    .then(()=> console.log('erfolgreich gelöscht'));
  }
  
  // async deleteNote(memo) {
  //   // const db = getFirestore();
  //   const coll = collection(this.firestore, 'notes'); // Verbindung zu firebase und der collection "notes"
   

  //   // Datenabfrage, um das Dokument mit den bekannten Werten zu finden ( title und description)
  //   const querySnapshot = await getDocs(query(coll, where('title', '==', memo.title), where('description','==', memo.description)));

  //   // Durchlaufe die Ergebnisse der Datenabfrage
  //   querySnapshot.forEach((docu) => {
  //     const docId = docu.id;
  //     console.log("Die Dokument-ID lautet:", docId);
      

  //    // Dokument löschen
  //     const docRef = doc(coll, docId);
     
     
  //     deleteDoc(docRef)
  //       .then(() => {
  //         console.log("Dokument erfolgreich gelöscht.");
  //       })
  //       .catch((error) => {
  //         console.error("Fehler beim Löschen des Dokuments:", error);
  //       });
  //   });

  // }
}


