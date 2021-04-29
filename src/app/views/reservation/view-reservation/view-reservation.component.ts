import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ReservationModel } from '../../../Models/reservation-model';
import { ReservationService } from '../../../Services/reservation.service';

@Component({
  selector: 'app-view-reservation',
  templateUrl: './view-reservation.component.html',
  styleUrls: ['./view-reservation.component.css']
})
export class ViewReservationComponent implements OnInit {
  reservationList:ReservationModel[]
  @ViewChild('deleteModal') public deleteModal: ModalDirective;

  constructor(private reservationService:ReservationService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.reservationService.getReservationDetails().subscribe(data=>{
      console.log("dddddd",data)
      this.reservationList = data.result
    })
  }

  reservationId: number;
  deleteReservation(reservationId) {
    this.reservationId = reservationId
    this.deleteModal.show();

  }

  deleteReservationOK() {

    this.deleteModal.show();
    this.reservationService.deleteReservation(this.reservationId).subscribe(data => {
      this.toastr.success("Successfully deleted..")
    }, err => {
      this.toastr.error("Something went wrong..")
    }, () => {

    })
  }

}
