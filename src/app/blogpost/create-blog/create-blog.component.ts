import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { DataStore } from 'aws-amplify';
import { Blog } from 'src/models';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, public authenticator: AuthenticatorService) { }

  blogForm!: FormGroup;
  editMode = false;
  submitted = false;
  buttonText = 'Submit';

  ngOnInit(): void {
    console.log(this.authenticator.user)
    this.blogForm = this.formBuilder.group({
			title: ['', [Validators.required, Validators.maxLength(100)]],
			content: [''],
		});
  }

  async pushBlog(event:any){
    try {
      await DataStore.save(
        new Blog({
          title: this.blogForm.controls.title.value,
          text: this.blogForm.controls.content.value,
          userID: this.authenticator.user.username!
        })
      );
      console.log("Post saved successfully!");
    } catch (error) {
      console.log("Error saving post", error);
    }
  }

}
