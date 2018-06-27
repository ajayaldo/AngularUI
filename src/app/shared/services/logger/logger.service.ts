import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(logLevel: string, log: string, obj?: object) {
    var logStr = logLevel+" : " + log;

    console.log({
      log:logStr,
      object: obj
    } );
    
  }
}
