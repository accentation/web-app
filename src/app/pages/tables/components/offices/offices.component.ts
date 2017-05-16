import { Component, OnInit } from '@angular/core';
import { officeService } from './offices.service';



@Component({
  selector: 'offices',
  templateUrl: './offices.html',
  styleUrls: ['./dataTables.scss']
})
export class Offices implements OnInit {

    data;
    filterQuery = "";
    rowsOnPage = 10;
    sortBy = "email";
    sortOrder = "asc";
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

    getUserClick() {
      this.service.getUserFromService().subscribe(
        datosRecibidos => {
          this.data = datosRecibidos;
          //this.route.navigate(['house-list']);
          //console.log(data)
          alert("GET RICIBIDO MUY BIEN");
        }
      );
  }

  getOfficeClick() {
      this.service.getOfficesFromService().subscribe(
        datosRecibidos => {
          this.data = datosRecibidos.content;
          //this.route.navigate(['house-list']);
          //console.log(data)
          alert("GET RICIBIDO MUY BIEN");
        }
      );
  }
  

  ngOnInit(){

      this.getOfficeClick()
  }


}

