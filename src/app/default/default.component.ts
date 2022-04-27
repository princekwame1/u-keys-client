import { Component, OnInit } from '@angular/core';
import { DashboardService } from './shared/dashboard.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  navIsClosed: any;


  constructor(private dashboardService:DashboardService) { }

  ngOnInit(): void {
  }
  
  toggleNav() {
    this.navIsClosed = !this.navIsClosed;
    this.dashboardService.navIsClosed.next(this.navIsClosed)

  }
}
