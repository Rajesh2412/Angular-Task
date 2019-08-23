import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: Array<any>;
  pageTitle="Git Users List";
  search: string = "";
  constructor(private http: HttpClient) { }
  configUrl = 'https://api.github.com/users?since=XXX';
  ngOnInit() {
    this.http.get(this.configUrl).subscribe((Data: any) => this.user = Data);
  }

}
