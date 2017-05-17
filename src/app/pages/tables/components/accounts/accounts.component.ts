import { Component, OnInit } from '@angular/core';
import { accountsService } from './accounts.service';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';




@Component({
  selector: 'accounts',
  templateUrl: './accounts.html',
  styleUrls: ['./dataTables.scss']
})
export class Accounts implements OnInit {

    data;
    filterQuery = "";
    rowsOnPage = 5;
    sortBy = "email";
    sortOrder = "asc";
    arrayPages: Array<number> = [];
    officeID: number;
    

   

    /*model = new Login('1', 'usuario', 'dad@faf.com', '1234');
    user : Login;*/
    constructor(private service: accountsService,
     private route: ActivatedRoute) {

     
 
  }

    toInt(num: string) {
        return +num;
    }

    sortByWordLength = (a: any) => {
        return a.city.length;
    }


  getAccountsClick(page: number, size: number, idOffice: number) {
    console.log(size);
      this.service.getAccountsFromService(page, size, idOffice).subscribe(
        account => {
          this.data = account.content;
          this.arrayPages = new Array(account.totalPages);
          console.log(account);
          //this.route.navigate(['house-list']);
          //console.log(data)
          //alert("GET RICIBIDO MUY BIEN");
        }
      );
  }
  

  ngOnInit(){ 

    this.officeID = +this.route.snapshot.params['officeID'];
    
    this.route.params.switchMap((params: Params) => 
      this.service
    .getAccountsFromService(0, 5, +params['officeID'])).subscribe(
        account => {
          this.data = account.content;
          console.log(account);
          console.log(this.data);
          this.arrayPages = new Array(account.totalPages);
          
        });

    
  }


    

}

