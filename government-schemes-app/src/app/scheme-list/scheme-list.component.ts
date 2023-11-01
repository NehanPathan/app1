import { Component, OnInit } from '@angular/core';
import { SchemeService } from '../scheme.service';

@Component({
  selector: 'app-scheme-list',
  templateUrl: './scheme-list.component.html',
  styleUrls: ['./scheme-list.component.css']
})
export class SchemeListComponent implements OnInit {
  schemes: any[] = [];
  filteredSchemes: any[] = [];
  professionSearchTerm: string = '';
  ageSearchTerm: number = 0;
  genderSearchTerm: string = '';
  nameSearchTerm: string = '';
  isSearchPerformed: boolean = false;

  constructor(private schemeService: SchemeService) { }

  ngOnInit(): void {
    this.schemeService.getSchemes().subscribe(data => {
      this.schemes = data;
      this.filteredSchemes = this.schemes;
    });
  }

  searchSchemes(): void {
    this.isSearchPerformed = true;
    this.filteredSchemes = this.schemes.filter(scheme => {
      const matchesProfession = !this.professionSearchTerm || scheme.profession.toLowerCase().includes(this.professionSearchTerm.toLowerCase());
      const matchesAge = this.ageSearchTerm === 0 || scheme.minAge <= this.ageSearchTerm;
      const matchesGender = !this.genderSearchTerm || scheme.gender.toLowerCase() === this.genderSearchTerm.toLowerCase();
      const matchesName = !this.nameSearchTerm || scheme.name.toLowerCase().includes(this.nameSearchTerm.toLowerCase());
      return matchesProfession && matchesAge && matchesGender && matchesName;
    });
  }
}
