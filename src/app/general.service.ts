import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { DataStore } from 'aws-amplify';
import { Blog } from 'src/models';

@Injectable({
  providedIn: 'root'
})
export class GeneralService implements OnInit {

  subscription!:any

  constructor() { }


  ngOnInit(): void {
      // this.subscription = DataStore.observe<Blog>(Blog).subscribe((msg) => {
      //   console.log(msg.model, msg.opType, msg.element);
      // });
  }

  // fetchData(): Blog[]{
  //   try {
  //     const posts:Blog[] = await DataStore.query(Blog);
  //     console.log("Posts retrieved successfully!", JSON.stringify(posts, null, 2));
  //     console.log(posts)
  //     return posts
  //   } catch (error) {
  //     console.log("Error retrieving posts", error);
  //   }
  // }


}
