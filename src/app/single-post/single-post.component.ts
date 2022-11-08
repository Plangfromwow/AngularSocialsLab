import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  @Input() DisplayPost :Post = {
    thought:'Thought goes here',
    title:'Title goes here'
  }

  editActive:boolean = false;

  changeTitle:string = '';
  changeThought:string ='';

  @Output() deletePost: EventEmitter<Post> = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }

  editMode(){
    this.changeTitle = this.DisplayPost.title;
    this.changeThought = this.DisplayPost.thought;
    
    this.editActive = true;
  }

  cancelEditMode(){
    this.editActive = false;
  }

  saveChanges(){
    this.DisplayPost.title = this.changeTitle;
    this.DisplayPost.thought = this.changeThought;
    this.editActive = false;
  }

  deletePostBtnPress(){
    this.deletePost.emit(this.DisplayPost);
  }
}
