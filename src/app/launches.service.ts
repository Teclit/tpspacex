import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';
import { Observable } from 'rxjs';



const endpoint = 'https://api.spacexdata.com/v3/launches';
 //GET All Launches = https://api.spacexdata.com/v3/launches
//GET One Launche ='https://api.spacexdata.com/v3/launches/67'

@Injectable({
  providedIn: 'root'
})

export class LaunchesService {


   constructor( private http:HttpClient){ }

   ngOnInit(): void {
     this.getAllLaunches();
   }



   getAllLaunches():Observable<any>{
      return this.http.get(endpoint);
   }
}
