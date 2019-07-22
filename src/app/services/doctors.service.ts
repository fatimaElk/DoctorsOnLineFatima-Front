import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from '../domain/doctor';


@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  URL: string = 'http://localhost:8080/doctors';

  constructor(private client: HttpClient) { }//DI

  public getAllDoctors(): Observable<Doctor[]> {
    return this.client.get<Doctor[]>(this.URL);
  }
  public getDoctorById(id: number): Observable<Doctor>{
    return this.client.get<Doctor>(this.URL + '/' + id);
  }
}
