import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spring-api-page1',
  templateUrl: './spring-api-page1.component.html',
  styleUrls: ['./spring-api-page1.component.scss']
})
export class SpringApiPage1Component implements OnInit {
  lstValue: any[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('http://localhost:8080/api/categories').subscribe(res => {
      this.lstValue =  JSON.parse(JSON.stringify(res));
    })
  }


  delete(id: number) {
    this.http.delete('http://localhost:8080/api/categories/' + id).subscribe(res => {
    this.lstValue = [];
    this.lstValue =  JSON.parse(JSON.stringify(res));
    })
  }
}
