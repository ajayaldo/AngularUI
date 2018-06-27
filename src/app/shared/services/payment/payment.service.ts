import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Paymentdata } from "../../models/paymentdata.model";

import { Observable } from "rxjs/Rx";

@Injectable()
export class PaymentService {
  readonly rootUrl = "http://localhost:54808";
  constructor(private http: HttpClient) {}

  submitPayment(paymentData: Paymentdata) {
    const body: Paymentdata = {
      bsb: paymentData.bsb,
      accountName: paymentData.accountName,
      accountNumber: paymentData.accountNumber,
      amount: paymentData.amount,
      reference: paymentData.reference
    };

    return this.http
      .post(this.rootUrl + "/payment", body)
      .map((res: Response) => {
        if (res) {
          if (res.status === 201) {
            return [{ status: res.status, json: res }];
          } else if (res.status === 200) {
            return [{ status: res.status, json: res }];
          }
        }
      })
      .catch(() =>
        Observable.throw("Server error")
      );
  }
}
