import { Component, OnInit } from '@angular/core';
import { transactionsService } from './transactions.service';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';




@Component({
  selector: 'transactions',
  templateUrl: './transactions.html',
  styleUrls: ['./dataTables.scss']
})
export class Transactions implements OnInit {

    data;
    filterQuery = "";
    rowsOnPage = 5;
    sortBy = "email";
    sortOrder = "asc";
    arrayPages: Array<number> = [];
    transactionID: number;
    

   

    /*model = new Login('1', 'usuario', 'dad@faf.com', '1234');
    user : Login;*/
    constructor(private service: transactionsService,
     private route: ActivatedRoute) {

     
 
  }

    toInt(num: string) {
        return +num;
    }

    sortByWordLength = (a: any) => {
        return a.city.length;
    }


  getTransactionsClick(page: number, size: number, idTransaction: number) {
    console.log(size);
      this.service.getTransactionsFromService(page, size, idTransaction).subscribe(
        transactions => {
          this.data = transactions.content;
          this.arrayPages = new Array(transactions.totalPages);

          //this.route.navigate(['house-list']);
          //console.log(data)
          //alert("GET RICIBIDO MUY BIEN");
        }
      );
  }
  

  ngOnInit(){
    
    this.route.params.switchMap((params: Params) => this.service
    .getTransactionsFromService(0, 5, +params['transactionID'])).subscribe(
        transactions => {
          this.data = transactions.content;
          this.arrayPages = new Array(transactions.totalPages);
          
        });

    
  }


    

}

