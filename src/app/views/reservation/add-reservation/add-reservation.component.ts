import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {

  reservationForm = new FormGroup({
    firstName: new FormControl(''),
    date: new FormControl(''),
    time: new FormControl(''),
    sport: new FormControl(''),
    lastName: new FormControl(''),
    contactno: new FormControl(''),
  });
    
  constructor() { }

  ngOnInit(): void {
  }

}
