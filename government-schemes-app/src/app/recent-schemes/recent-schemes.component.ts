import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-recent-schemes',
  templateUrl: './recent-schemes.component.html',
  styleUrls: ['./recent-schemes.component.css']
})
export class RecentSchemesComponent implements OnInit {
  recentSchemes: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Fetch recent schemes from the API endpoint
    this.http.get('http://localhost:3000/recent-schemes').subscribe((data: any) => {
      this.recentSchemes = data;
    });
  }
}
