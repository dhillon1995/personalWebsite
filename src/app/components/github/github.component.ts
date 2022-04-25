import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  constructor() { }



  url: string = "www.google.com"

  func(){
    window.open(this.url, "_blank");
  }

  ngOnInit(): void {
    window.location.href = "https://github.com/dhillon1995";
    //this.func()
  }

}
