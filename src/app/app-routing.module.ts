import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponentComponent } from './auth/auth-component/auth-component.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { CreateBlogComponent } from './blogpost/create-blog/create-blog.component';
import { MyBlogsComponent } from './blogpost/my-blogs/my-blogs.component';

const routes: Routes = [
  {
		path: '',
		pathMatch: 'full',
		redirectTo: 'login',
	},
  {
		path: 'login',
		component: AuthComponentComponent,
	},
  {
		path: 'blog',
		component: BlogpostComponent,
	},
  {
		path: 'create_blog',
		component: CreateBlogComponent,
	},
  {
		path: 'my_blogs',
		component: MyBlogsComponent,
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
