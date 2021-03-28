import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class DiscussionService {

  private _discussionsGetUrl = "http://localhost:3000/api/discussions";
  private _discussionsPostUrl = "http://localhost:3000/api/discussion";

  constructor(private http : HttpClient) { }

  getDiscussions(){
    return this.http.get<any>(this._discussionsGetUrl)
  }

  postDiscussions(discussion){
    return this.http.post<any>(this._discussionsPostUrl, discussion)
  }


}
