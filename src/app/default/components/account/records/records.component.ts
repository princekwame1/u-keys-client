import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/default/shared/account.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {
  StockList: any;
 

  constructor(private Accountservice: AccountService ) { }

  ngOnInit(): void {
    this.getStock();
  }
  getStock(){
    this.Accountservice.getStock().subscribe(data=>{
      this.StockList=data;
    })
   }
}
