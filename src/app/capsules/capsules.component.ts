import { Component, OnInit } from '@angular/core';
import { CapsulesService } from '../capsules.service';



@Component({
  selector: 'app-capsules',
  templateUrl: './capsules.component.html',
  styleUrls: ['./capsules.component.css'],
  providers: [CapsulesService]
})


export class CapsulesComponent implements OnInit {

  public getJsonValue: any;
  myimage: string= "../assets/images/Captura.png";

  constructor(private capsulesService: CapsulesService){}

  ngOnInit(): void{
    this.getMethod();
  }



 getMethod(){
    this.capsulesService.getAllCapsules().subscribe(
      (data)=> {
        console.log(data);
        this.getJsonValue = data;
      }
    );
  }

}
