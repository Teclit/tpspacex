import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';
import { Observable } from 'rxjs';



const AllCapsules = 'https://api.spacexdata.com/v3/capsules';


@Injectable({
  providedIn: 'root'
})




export class CapsulesService {


   constructor( private http: HttpClient){ }

   ngOnInit(): void {
     this.getAllCapsules();
   }

   getAllCapsules():Observable<any>{
      return this.http.get(AllCapsules);
   }
}
