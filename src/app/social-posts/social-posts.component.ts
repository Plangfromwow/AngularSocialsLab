import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { SinglePostComponent } from '../single-post/single-post.component';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  listOfPosts:Post[] = [
    {
      title:'Test Post Title',
      thought:'Test Post Thought'
    },
    {
      title:'Another Test Post Title',
      thought:'Another Test Thought'
    }
  ];

  newPost:Post ={
    title:'',
    thought:''
  }

  createPostForm:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  addThought(){
    let addPost:Post = {... this.newPost};

    this.listOfPosts.push(addPost);
    this.newPost.title = '';
    this.newPost.thought='';
    this.createPostForm = false;

  }
  showForm(){
    this.createPostForm = !this.createPostForm;
  }

  removePostFromList(removePost:Post){
    for(let i = 0; i < this.listOfPosts.length;i++){
      if(this.listOfPosts[i] === removePost){
        this.listOfPosts.splice(i,1);
        return;
      }
    }
  }

}
