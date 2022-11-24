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
  pages: number = 1;
  count: number = 0;
  launcheSize: number = 10
  launcheSizes: any =[4,8,12,16]
  constructor(private launchesService: LaunchesService){}

  ngOnInit(): void {
   this.launchList();
  }

   public launchList(){
      this.launchesService.getAllLaunches().subscribe((response)=>{
        this.LAUNCHES =response;
        console.log(this.LAUNCHES);
      })
   }

}