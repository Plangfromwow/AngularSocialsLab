import { Component, OnInit,Input } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
