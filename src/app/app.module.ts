import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { PaymentComponent } from "./payment/payment.component";
import { PaymentService } from "./shared/services/payment/payment.service";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import { LoggerService } from "./shared/services/logger/logger.service";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  { path: 'payment', component: PaymentComponent },
  { path: '', redirectTo: '/payment', pathMatch: 'full' }
];

@NgModule({
  declarations: [PaymentComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PaymentService, LoggerService],
  bootstrap: [PaymentComponent]
})
export class AppModule { }
