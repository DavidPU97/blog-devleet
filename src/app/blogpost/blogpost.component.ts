import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataStore, Predicates } from 'aws-amplify';
import { Blog } from 'src/models';
import { API } from 'aws-amplify';

import { GeneralService } from '../general.service';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit, OnDestroy {

  constructor(private gService: GeneralService) { }

  subscription!:any
  blog: Blog[] = []

  ngOnInit(): void {
    // this.blog = [new Blog(1,"test", "this is a test :D", "12")]
    // this.blog = this.gService.fetchData();
    this.subscription = DataStore.observe<Blog>(Blog).subscribe((msg) => {
      console.log(msg.model );
      console.log(msg.opType)
      console.log(msg.element)
    });
    this.loadBlogs();
  }

  // public async loadBlogs() {
  //   let blogs = await DataStore.query(Blog, Predicates.ALL)
  //   this.blog = blogs
  //   console.log(blogs)
  // }

  loadBlogs(){
    // client request: fetching blogs
    API.get('blogapi', '/blogs', {}).then(result => {
    this.blog = JSON.parse(result.body);
    }).catch(err => {
    console.log(err);
    })
  }

  loadSpecificBlog(id:string){
    // client request: fetching a todo by id
    API.get('blogapi', `/blogs/${id}`, {}).then((result) => {
      this.blog = JSON.parse(result.body);
    }).catch(err => {
      console.log(err);
    })
  }

  ngOnDestroy() {
    if (!this.subscription) return;
    this.subscription.unsubscribe();
  }

}
