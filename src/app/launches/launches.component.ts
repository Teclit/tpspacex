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
  page: number = 1;
  count: number = 0;
  launcheSize: number = 18
  launcheSizes: any =[4,8,12,16]
  constructor(private launchesService: LaunchesService){}

  ngOnInit(): void {
   this.launchList();
  }

    launchList(){
      this.launchesService.getAllLaunches().subscribe((response)=>{
        this.LAUNCHES =response;
        //Test pagination
        this.launcheSize = Object.keys(this.LAUNCHES).length/2;
       console.log(this.LAUNCHES);
      })
    }

    onBoardDataChange(event: any):void{
      this.page = event;
      this.launchList();

    }

    onBoardSizeChange(event: any):void{
      this.launcheSize =event.target.value;
      this.page = 1;
      this.launchList();
    }




}