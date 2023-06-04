import { Component } from '@angular/core';

@Component({
  selector: 'app-note-input',
  templateUrl: './note-input.component.html',
  styleUrls: ['./note-input.component.scss']
})
export class NoteInputComponent {
  title = '';
  description = '';

  constructor(){
    
  }

}
