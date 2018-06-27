import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(logLevel: string, log: string) {
    console.log(logLevel + " : " + log);
  }
}
