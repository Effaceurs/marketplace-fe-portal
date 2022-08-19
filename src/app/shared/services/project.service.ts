import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Project } from "../interfaces";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient) {
  }

  get(user: string): Observable<Project[]> {
    return this.http.get<Project[]>('/api/project/', {params: {user}})
  }

  fetchProject(id: string): Observable<Project> {
    return this.http.get<Project>(`/api/project/${id}`)
  }
}