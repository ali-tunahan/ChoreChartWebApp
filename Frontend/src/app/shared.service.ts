import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "https://localhost:7211/api"
  constructor(private http: HttpClient) { }

  getAllChores (): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + "/Chores/getall");
  }

  getChoresById (): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + "/Chores/getbyid");
  }

  getChoresByStatus (): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + "/Chores/getbystatus");
  }

  getChoresByPriority (): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + "/Chores/getbypriority");
  }

  addChore (val: any) {
    return this.http.post(this.APIUrl + "/Chores/add", val)
  }

  updateChore (val: any) {
    return this.http.put(this.APIUrl + "/Chores/update", val)
  }
  deleteChore (val: any) {
    var val1 = this.http.delete(this.APIUrl + "/Chores/deletebyid?id=" + val.Id, val);
    return val1;
  }


}
