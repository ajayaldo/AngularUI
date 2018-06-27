import { Component, OnInit } from "@angular/core";
import { Paymentdata } from "../shared/models/paymentdata.model";
import { NgForm } from "@angular/forms";
import { PaymentService } from "../shared/services/payment/payment.service";
import { ToastrService } from "ngx-toastr";
import { LoggerService } from "../shared/services/logger/logger.service";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.css"]
})
export class PaymentComponent implements OnInit {
  paymentData: Paymentdata;
  constructor(
    private paymentService: PaymentService,
    private toastr: ToastrService,
    private logger: LoggerService
  ) { }

  ngOnInit() {
    this.paymentData = new Paymentdata();
  }

  OnSubmit(form: NgForm) {
    this.logger.log("Info", "Posting data to server", form.value);

    this.paymentService.submitPayment(form.value).subscribe(
      () => {

        this.logger.log("Info", "Posting data to server success");
        this.toastr.success("Success", "Payment");
      },
      () => {

        this.logger.log("Error", "Posting data to server failed");
        this.toastr.error("Failed", "Payment");
      }
    );
  }
}
