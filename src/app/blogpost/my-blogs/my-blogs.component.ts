import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { DataStore, Predicates } from 'aws-amplify';
import { Blog } from 'src/models';
import { API } from 'aws-amplify';

@Component({
  selector: 'app-my-blogs',
  templateUrl: './my-blogs.component.html',
  styleUrls: ['./my-blogs.component.css']
})
export class MyBlogsComponent implements OnInit {

  constructor(public authenticator: AuthenticatorService) { }

  blog: Blog[] = []

  ngOnInit(): void {
    this.loadBlogs()
  }

  // public async loadBlogs() {
  //   let blogs = await DataStore.query(Blog, b => b.userID("eq", this.authenticator.user.username!))
  //   this.blog = blogs
  // }

  loadBlogs(){
    // client request: fetching blogs
    API.get('blogapi', '/blogs', {}).then(result => {
    this.blog = JSON.parse(result.body);
    }).catch(err => {
    console.log(err);
    })
  }

  async deleteAll(){
    console.log("in delete!")
    try {
      await DataStore.delete(Blog, Predicates.ALL);
      console.log("Blog deleted successfully!");
    } catch (error) {
      console.log("Error deleteing blogs", error);
    }
  }

  public async deleteUserBlogs() {
    await DataStore.delete<Blog>(Blog, b => b.userID("eq", this.authenticator.user.username!))
      .then(() => this.loadBlogs())
      .catch(e => {
        console.log('error deleting all messages...', e);
      });
  }

  delete(id:string){
    // client request: deleting a todo by id
    API.del('blogapi', `/blogs/${id}`, {}).then(result => {
      console.log(result);
    }).catch(err => {
      console.log(err);
    })
  }

  // async updateBlog(){
  //   const original = await DataStore.query(Blog, "123")!;

  //   await DataStore.save(
  //     Blog.copyOf(original, updated => {
  //       updated.title = `title ${Date.now()}`;
  //     })
  //   );
  // }

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


}
