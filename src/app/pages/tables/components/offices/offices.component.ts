import { Component, OnInit } from '@angular/core';
import { officeService } from './offices.service';



@Component({
  selector: 'offices',
  templateUrl: './offices.html',
  styleUrls: ['./dataTables.scss']
})
export class Offices implements OnInit {

    data;
    officeData;
    filterQuery = "";
    rowsOnPage = 5;
    sortBy = "email";
    sortOrder = "asc";
    arrayPages: Array<number> = [];
   

    /*model = new Login('1', 'usuario', 'dad@faf.com', '1234');
    user : Login;*/
    constructor(private service: officeService) {
        
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


  getOfficeClick(page: number, size: number) {
    console.log(size);
      this.service.getOfficesFromService(page, size).subscribe(
        office => {
          this.officeData = office;
          this.data = office.content;
          this.arrayPages = new Array(office.totalPages);
          //this.route.navigate(['house-list']);
          //console.log(data)
          //alert("GET RICIBIDO MUY BIEN");
        }
      );
  }
  

  ngOnInit(){
      this.getOfficeClick(0,5)
  }



}

