import { Doctor } from './../../domain/doctor';
import { Component, OnInit } from '@angular/core';
import { DoctorsService } from 'src/app/services/doctors.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss']
})
export class DoctorDetailsComponent implements OnInit {
  pageTitle: string = 'Doctor Detail'; doctor?: Doctor; errorMessage: string;
  constructor(private route: ActivatedRoute, private router: Router, private doctorsService: DoctorsService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      //console.log('recuperer id: ' + id);
      // the following call will run synchronously
      this.getDoctor(id);
    });
  }
  getDoctor(id: number) {
    this.doctorsService.getDoctorById(id)
      .subscribe(
        arg => this.doctor = arg,
        err => console.log(' Attention, il y a eu une erreur: ' + err)
      );
  }
  onBack(): void { this.router.navigate(['/list']); }
  addToCart() {
    this.cartService.addToCart(this.doctor);
    this.router.navigate(['/list']);   // Programmatic navigation
  }




}
