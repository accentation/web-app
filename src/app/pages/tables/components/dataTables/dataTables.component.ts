import { Component, OnInit } from '@angular/core';
import { DataTablesService } from './dataTables.service';



@Component({
  selector: 'data-tables',
  templateUrl: './dataTables.html',
  styleUrls: ['./dataTables.scss']
})
export class DataTables {

    data;
    clientsData;
    filterQuery = "";
    rowsOnPage = 5;
    sortBy = "email";
    sortOrder = "asc";
    arrayPages: Array<number> = [];
    /*model = new Login('1', 'usuario', 'dad@faf.com', '1234');
    user : Login;*/
    constructor(private service: DataTablesService) {
        
    /*this.service.getData().then((data) => {
      this.data = data;
    });*/
    

  }

    toInt(num: string) {
        return +num;
    }

    sortByWordLength = (a: any) => {
        return a.city.length;
    }

    getClientsClick(page: number, size: number) {
        this.service.getClientsFromService(page, size).subscribe(
        clientsReceived => {
          this.clientsData = clientsReceived;
          this.data = clientsReceived.content;
          this.arrayPages = new Array(clientsReceived.totalPages);
       
        }
      );
  }

ngOnInit(){
      this.getClientsClick(0,5)
  }
  
  }
  


