import { from } from 'rxjs';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { PostDetailComponent } from './components/post-detail/post-detail.component'
import { PostComponent } from './components/post/post.component'
import { SubscriptionComponent } from './components/subscription/subscription.component'


const routes: Routes = [
  { path: '', component: HomepageComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomepageComponent, canActivate: [AuthGuard] },
  { path: 'category', component: CategoryComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'about', component: AboutComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'add_post', component: AddPostComponent, canActivate: [AuthGuard] },
  { path: 'post', component:PostComponent},
  { path: 'wishlist', component:WishlistComponent, canActivate: [AuthGuard] },
  { path: 'postDetail/:id', component:PostDetailComponent , canActivate: [AuthGuard] },
  { path: 'subscription', component:SubscriptionComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
