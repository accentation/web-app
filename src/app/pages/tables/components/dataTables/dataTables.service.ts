import {Injectable} from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class DataTablesService {

  
constructor(private http: Http) { }

  
  //SERVICIO PARA LOS DATOS DE LA TABLA
    getUserFromService(): Observable<any> {
        return this.http.get('http://jsonplaceholder.typicode.com/posts')
                    .map( (res: Response) => res.json())
                    .catch( (error: any) => Observable.throw(error.json().error || 'Server error'));

    }

    //SERVICIO PARA LOS DATOS DE LAS OFICINAS
    getOfficesFromService(): Observable<any> {
        return this.http.get('http://192.168.1.240:8081/offices/?page=1&size=1')
                    .map( (res: Response) => {
                        console.log("data",res)
                        res.json() 
                    })
                    .catch( (error: any) => Observable.throw(error.json().error || 'Server error'));

    }
}
