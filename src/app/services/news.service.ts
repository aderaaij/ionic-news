import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

const { apiKey, apiUrl } = environment;

const params = new HttpParams().set('apiKey', apiKey);

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) {}
  getData(url) {
    return this.http.get(`${apiUrl}/${url}`, { params });
  }
}
