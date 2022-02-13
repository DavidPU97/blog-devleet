import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { DataStore, Predicates } from 'aws-amplify';
import { Blog } from 'src/models';

@Component({
  selector: 'app-my-blogs',
  templateUrl: './my-blogs.component.html',
  styleUrls: ['./my-blogs.component.css']
})
export class MyBlogsComponent implements OnInit {

  constructor(public authenticator: AuthenticatorService, private api: APIService) { }

  blog: Blog[] = []

  ngOnInit(): void {
    this.loadBlogs()
  }

  public async loadBlogs() {
    let blogs = await DataStore.query(Blog, b => b.userID("eq", this.authenticator.user.username!))
    this.blog = blogs
  }

  // async delete(){
  //   // console.log("in delete!")
  //   // try {
  //   //   await DataStore.delete(Blog, Predicates.ALL);
  //   //   console.log("Blog deleted successfully!");
  //   // } catch (error) {
  //   //   console.log("Error deleteing blogs", error);
  //   // }

  //   try {
  //     // setLoading(true)
  //     const job = await DataStore.query(Blog, this.blog[0].id)
  //     const del = await DataStore.delete(job)
  //     // del && goBack(navigation)()
  //     // setLoading(false)
  //   } catch (err) {
  //     console.log("Error deleteing blogs", err);
  //   }
  // }

  public async delete() {
    await DataStore.delete<Blog>(Blog, b => b.userID("eq", this.authenticator.user.username!))
      .then(() => this.loadBlogs())
      .catch(e => {
        console.log('error deleting all messages...', e);
      });
  }

}
