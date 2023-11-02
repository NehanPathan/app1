import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchemeService {
  private apiUrl = 'http://localhost:3000/filtered-schemes';

  constructor(private http: HttpClient) { }

  getSchemes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getSchemeById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  getRecentSchemes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/recent-schemes`);
  }

  getPopularSchemes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/popular-schemes`);
  }
}
