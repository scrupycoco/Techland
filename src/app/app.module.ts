import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { UcWidgetModule } from 'ngx-uploadcare-widget';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { CategoryComponent } from './components/category/category.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
// import { JwtModule } from '@auth0/angular-jwt';
// gimport { UsermanagerService } from './usermanager.service';
import { from, scheduled } from 'rxjs';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';    // add this
import { JwtModule, JwtInterceptor } from '@auth0/angular-jwt';
import { UserService } from './user.service';
import { ErrorInterceptor } from './error.interceptor';
// import { from } from 'rxjs';
import { PostComponent } from './components/post/post.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { SubscriptionComponent } from './components/subscription/subscription.component'

export function tokenGetter(){
  return localStorage.getItem('token');
}
 

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AddPostComponent,
    CategoryComponent,
    HomepageComponent,
    LoginComponent,
    NavbarComponent,
    ProfileComponent,
    RegisterComponent,
    PostComponent,
    PostDetailComponent,
    WishlistComponent,
    SubscriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // LottieModule.forRoot({player: playerFactory}),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:4200']
      }
    })
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthGuardService,
    AuthService,
    UserService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
}) 
export class AppModule { }
