import {Component, OnInit} from '@angular/core';
import {environment} from "@env/environment";

@Component({
  selector: 'app-log-in-with-google',
  templateUrl: './log-in-with-google.component.html',
  styleUrls: ['./log-in-with-google.component.scss']
})
export class LogInWithGoogleComponent implements OnInit {

  variable: string = environment.api + 'oauth2/authorization/google';

  ngOnInit(): void {
    window.open('www.google.com' , '_blank' , )
  }

}

