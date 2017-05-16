import {Injectable} from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class DataTablesService {

  
constructor(private http: Http) { }

  
  //SERVICIO PARA LOS DATOS DE LOS CLIENTES
    getClientsFromService(page:number, size:number): Observable<any> {
        return this.http.get('http://192.168.1.240:8000/api/clients/?page='+page+'&size='+size)
                    .map( (res: Response) => res.json())
                    .catch( (error: any) => Observable.throw(error.json().error || 'Server error'));
                        //return res.json() 
                    

    }

 
}
