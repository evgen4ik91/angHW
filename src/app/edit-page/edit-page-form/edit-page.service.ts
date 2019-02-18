import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleInterface } from "../../interface";

@Injectable({
    providedIn: 'root',
})
export class EditService {
  constructor(private http: HttpClient) { }

  saveArticle(obj: ArticleInterface) {
	return this.http.post<ArticleInterface>('http://localhost:3000/news', obj, {headers: {header:'Content-Type: text/html'}});
  }
  updateArticle(obj: ArticleInterface) {
	return this.http.put<ArticleInterface>(`http://localhost:3000/news/${obj.id}`, obj, {headers: {header:'Content-Type: text/html'}});
  }
}