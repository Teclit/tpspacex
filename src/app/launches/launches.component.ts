import { Component, OnInit } from '@angular/core';
import {LaunchesService} from '../launches.service';
@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css'],
  providers:  [LaunchesService]
})
export class LaunchesComponent  implements OnInit{
  
  title = 'SpaceX Launches';
  LAUNCHES:any;
  launchesSize: number = 18
  constructor(private launchesService: LaunchesService){}

  ngOnInit(): void {
   this.launchList();
  }

    launchList(){
      this.launchesService.getAllLaunches().subscribe((response)=>{
        this.LAUNCHES =response;
        //Test pagination
        this.launchesSize = Object.keys(this.LAUNCHES).length;
         console.log(this.LAUNCHES);
      })
    }





}