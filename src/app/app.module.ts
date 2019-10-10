


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment),
    AngularFireDatabaseModule
    // RouterModule.forRoot([
    //   {
    //     path: '',
    //     component: AppComponent
    //   },
    
   
    //])
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
