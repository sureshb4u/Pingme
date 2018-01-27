import { Component, OnInit } from '@angular/core';
import{DashboardService} from '../dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }
  public obj: Object;
  ngOnInit() {
    var obj;
    this.dashboardService.getJSON().subscribe(data => this.obj=data.data, error => console.log(error)) ;
  }

}
