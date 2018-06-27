import { Component, OnInit } from "@angular/core";
import { Paymentdata } from "../shared/models/paymentdata.model";
import { NgForm } from "@angular/forms";
import { PaymentService } from "../shared/services/payment/payment.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.css"]
})
export class PaymentComponent implements OnInit {
  paymentData: Paymentdata;
  constructor(
    private paymentService: PaymentService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.paymentData = new Paymentdata();
  }

  OnSubmit(form: NgForm) {
    console.log(form.value);
    this.paymentService.submitPayment(form.value).subscribe(
      res => {
        this.toastr.success("Success", "Payment");
      },
      err => {
        this.toastr.error("Failed", "Payment");
      }
    );
  }
}
