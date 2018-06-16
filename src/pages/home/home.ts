import { Note } from './../../models/node.model';
import { NoteService } from './../../providers/note-service/note-service';
import { AddNotePage } from './../add-note/add-note';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewNotePage } from '../view-note/view-note';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private notes : Promise<Note[]>;
  private note : Note[];
  constructor(public navCtrl: NavController,
  private noteservice: NoteService) {

  }
  ionViewWillEnter(){
    this.notes= this.getAllNotes();
  }

  addNote(){
    this.navCtrl.push(AddNotePage)
  }

  getAllNotes(){
   return this.noteservice.getAllNotes()
  }

  getNote(createDate:number){
    this.noteservice.getNote(createDate).then((note) =>{
      this.note = note;
      this.navCtrl.push(ViewNotePage,{note:this.note});
    });
  }

}
