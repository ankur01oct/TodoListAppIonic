import { Note } from './../../models/node.model';
import { NoteService } from './../../providers/note-service/note-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-view-note',
  templateUrl: 'view-note.html',
})
export class ViewNotePage {

  note:Note;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private noteservice:NoteService) {
      this.note = this.navParams.get('note');//we are passing note object to view so navParams is a way to access it 
  }

  deleteNote(createDate:number){
    this.noteservice.deleteNote(createDate);
    this.navCtrl.pop();
  }
}
