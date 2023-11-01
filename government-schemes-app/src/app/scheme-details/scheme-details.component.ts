import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchemeService } from '../scheme.service';

@Component({
  selector: 'app-scheme-details',
  templateUrl: './scheme-details.component.html',
  styleUrls: ['./scheme-details.component.css']
})
export class SchemeDetailsComponent implements OnInit {
  scheme: any;

  constructor(private route: ActivatedRoute, private schemeService: SchemeService) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = Number(idParam); // Convert idParam to number
      if (!isNaN(id)) {
        this.schemeService.getSchemeById(id).subscribe(data => {
          this.scheme = data;
        });
      } else {
        console.error('Invalid ID parameter'); // Handle the error as needed
      }
    } else {
      console.error('ID parameter is null'); // Handle the error as needed
    }
  }
}
