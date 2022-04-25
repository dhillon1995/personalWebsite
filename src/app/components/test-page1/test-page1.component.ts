import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-test-page1',
  templateUrl: './test-page1.component.html',
  styleUrls: ['./test-page1.component.css']
})
export class TestPage1Component implements OnInit {

  constructor() { }

  gitHub () {
    window.open("https://github.com/dhillon1995")
  }


  ngOnInit(): void {
  }

}
