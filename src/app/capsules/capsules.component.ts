import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-capsules',
  templateUrl: './capsules.component.html',
  styleUrls: ['./capsules.component.css']
})


export class CapsulesComponent implements OnInit {

  public getJsonValue: any;

  constructor(private http: HttpClient){

  }

  ngOnInit(): void{
    this.getMethod();
  }

  public getMethod(){
    this.http.get('https://api.spacexdata.com/v3/capsules').subscribe(
      (data)=> {
        console.log(data);
        this.getJsonValue = data;
      }
    );
  }

}
