import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router'
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    UserDetailComponent,
    FilterPipe
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', pathMatch: 'full', redirectTo: 'detail'},
      { path: 'detail', component: UserDetailComponent },
      { path: 'details/:userName', component: DetailsComponent },
      { path: 'details', component: UserDetailComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
