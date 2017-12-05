import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


ngOnInit(){
  firebase.initializeApp({
    apiKey: "AIzaSyBs-EAx0j2_aUxJcPpR33oMau6y67vFxTg",
    authDomain: "myscrumtool.firebaseapp.com"
  })
}



}
