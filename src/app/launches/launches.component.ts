import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from'@angular/common/http';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent  implements OnInit{
  title = 'BenTek TP';

   getJsonValue: any;
   postJsonValue: any;

   constructor(private http: HttpClient){
     
   }

   ngOnInit(): void {
     this.getMethod();
   }



   public getMethod(){
     //GET All Launches = https://api.spacexdata.com/v3/launches
     //GET One Launche ='https://api.spacexdata.com/v3/launches/67'
     this.http.get('https://api.spacexdata.com/v3/launches/67').subscribe((data)=>{
       console.log(data);
       this.getJsonValue = data;
     });
   }

}