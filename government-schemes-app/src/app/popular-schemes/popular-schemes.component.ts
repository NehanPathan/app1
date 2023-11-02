import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-popular-schemes',
  templateUrl: './popular-schemes.component.html',
  styleUrls: ['./popular-schemes.component.css']
})
export class PopularSchemesComponent implements OnInit {
  popularSchemes: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Fetch popular schemes from the API endpoint
    this.http.get('http://localhost:3000/popular-schemes').subscribe((data: any) => {
      this.popularSchemes = data;
    });
  }
}
