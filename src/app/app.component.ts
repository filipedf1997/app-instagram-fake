import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app3';

  ngOnInit(): void{
    let firebaseConfig = {
      apiKey: "AIzaSyCw6U5Ey4Npd7okddJtAZr5FW9GjgbvrlY",
      authDomain: "instagram-clone-c8ebe.firebaseapp.com",
      databaseURL: "https://instagram-clone-c8ebe.firebaseio.com",
      projectId: "instagram-clone-c8ebe",
      storageBucket: "instagram-clone-c8ebe.appspot.com",
      messagingSenderId: "345005044769",
      appId: "1:345005044769:web:807f67721330059f635f60",
      measurementId: "G-0JT0DDBWFK"
    }
    firebase.initializeApp(firebaseConfig)
    firebase.analytics()
  }
}
