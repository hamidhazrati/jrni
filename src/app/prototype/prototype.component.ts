import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-prototype',
  templateUrl: './prototype.component.html',
  styleUrls: ['./prototype.component.sass']
})

@Injectable()
export class PrototypeComponent implements OnInit {
  configUrl = 'assets/config.json';
  config$ = null;
  respUrl$ = null;
  headers = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.configUrl).subscribe(resp=>{
      this.config$ = resp;
    });
  }
  getUrl(test:any) {
    this.respUrl$ = test.url;
    this.http.get(test.url,this.config$.headers).subscribe(resp=>{
      this.respUrl$ = resp;
      console.log(resp);
    });
  }
}
