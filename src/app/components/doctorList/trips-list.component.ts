import { Doctor } from './../../domain/doctor';
import { DoctorsService } from './../../services/doctors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.scss']
})
export class TripsListComponent implements OnInit {
  data: Doctor[];
  // tslint:disable-next-line: no-inferrable-types
  width: number = 50;
  height: number = 50;
  constructor(private service: DoctorsService) { }

  ngOnInit() {
     this.service.getAllDoctors().subscribe(
       response => this.data = response,
       erreur => console.log('attention erreur : ' + erreur)
       );
  //    this.data = {
  //    id: '3',
  //   lastName: 'Duchemin',
  //   firstName: 'sarah',
  //   phoneNumber: '049999999',
  //   email: 'sarah@test.com',
  //   picture: 'https://cdn.pixabay.com/photo/2016/06/23/15/04/pinocchio-1475518_960_720.png',
  //   listPatient: []
  // };
   }

}
