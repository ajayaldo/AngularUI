import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { PaymentComponent } from "./payment/payment.component";
import { PaymentService } from "./shared/services/payment/payment.service";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import { LoggerService } from "./shared/services/logger/logger.service";

@NgModule({
  declarations: [AppComponent, PaymentComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({ positionClass: "inline" }),
    BrowserAnimationsModule
  ],
  providers: [PaymentService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
