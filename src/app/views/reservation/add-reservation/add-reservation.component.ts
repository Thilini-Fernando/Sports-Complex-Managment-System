import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ReservationModel } from '../../../Models/reservation-model';
import { ReservationService } from '../../../Services/reservation.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {
  sportList = []
  Reservation:ReservationModel = new ReservationModel();
  sportId:number;

  reservationForm = new FormGroup({
    firstName: new FormControl(''),
    date: new FormControl(''),
    time: new FormControl(''),
    sport: new FormControl(''),
    lastName: new FormControl(''),
    contactno: new FormControl(''),
  });
    
  constructor(private ReservationServc:ReservationService, public toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onCheckChange(event, id) {
   
    if (event && id == 1) {
      this.sportList.push(1);
      this.sportId =1;
    } else if (!event && id == 1) {
      const index = this.sportList.indexOf(1);
      if (index > -1) {
        this.sportList.splice(index, 1);
        this.sportId =1;
      }
    } else if (event && id == 2) {
      this.sportList.push(2);
      this.sportId =2;
    } else if (!event && id == 2) {
      const index = this.sportList.indexOf(2);
      if (index > -1) {
        this.sportList.splice(index, 1);
        this.sportId =1;
      }
    } else if (event && id == 3) {
      this.sportList.push(3);
      this.sportId =3;
    } else if (!event && id == 3) {
      const index = this.sportList.indexOf(3);
      if (index > -1) {
        this.sportList.splice(index, 1);
        this.sportId =1;
      }
    }
 

  }

  selectSport(event){
    this.Reservation.sport = event
  }

  SaveReservation(){
    console.log("event data=====",  this.sportList);
    this.Reservation.contactNumber = this.reservationForm.value.contactno
    this.Reservation.firstName =  this.reservationForm.value.firstName
    this.Reservation.lastNme = this.reservationForm.value.lastName
    this.Reservation.date = this.reservationForm.value.date
    this.Reservation.time = this.reservationForm.value.time

    console.log("ReservationData",this.Reservation)
    this.ReservationServc.insertReservationDetails(this.Reservation).subscribe(data=>{
      console.log("aaaaaaaaaaaaaaaaaaaa", data)
      this.toastr.success("Successfully inserted..")
    },err=>{
      this.toastr.error("Somethng went wrong",err)
    },()=>{

    })
  }


}
