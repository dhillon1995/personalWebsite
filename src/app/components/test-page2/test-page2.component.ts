import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-test-page2',
  templateUrl: './test-page2.component.html',
  styleUrls: ['./test-page2.component.css']
})
export class TestPage2Component implements OnInit {

  constructor(private http: HttpClient) {}

  postData = {
    command: 'get_test',
  }
  
  url = "http://192.168.0.29:1235"
  
  json: any;

  responseObject: Object[] = [];

  newVar: any;

  venues: any; 

  testFunc(){
    console.log("button test")
  }

  getData(){
    this.http.post<JSON>(this.url, this.postData).toPromise().then((data) => {
      this.json = data;
      this.responseObject = [];
      console.log("this is the response data", data)
      console.log(typeof data)
      console.log("the object",this.responseObject)
      this.newVar = this.json
      console.log(this.newVar.Action)
      

      /*Object.entries(data).forEach(venue => {
          console.log("venue 1",venue[1][0]);
          //let venueData = (name: "", descriptin: "");
          var venueData = venue[1][0];

          console.log("type of venueData", typeof venueData, venueData )

          this.responseObject.push(venueData);
  
      });
      
      this.venues = (this.responseObject);
      console.log("venues2",this.responseObject)
      console.log("this is the venues object",this.venues)*/


      //for (const [key, value] of Object.entries(this.responseObject)) {
      //  console.log(`${key}: ${value}`);
      //}


    });
  }

  ngOnInit(): void {
  }

}
