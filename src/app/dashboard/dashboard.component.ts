import { Component, OnInit } from '@angular/core';
import{DashboardService} from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }
  public obj: Object;
  ngOnInit() {
    var obj;
    this.dashboardService.getJSON().subscribe(data => this.obj=data.data, error => console.log(error)) ;
  }

}
