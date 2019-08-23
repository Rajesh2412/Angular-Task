import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
user:Array<any>
login:any;
 
  constructor(private http:HttpClient,private route: ActivatedRoute,
    private router: Router) { }
   

  ngOnInit() {
  this.login = this.route.snapshot.paramMap.get('userName');
  ///this.animal = this.route.snapshot.paramMap.get("animal")
  console.log(this.login);
     this.http.get("https://api.github.com/users/" + this.login + "/repos").subscribe((Data:any)=>{
       this.user=Data;
      });
  }

}
