import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  lstValue: any[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/categories').subscribe(res => {
      this.lstValue.push(res);
    })
  }


  delete(id: number) {
    this.http.delete('http://localhost:8000/api/categories/' + id).subscribe(res => {
      this.lstValue = [];
    this.lstValue.push(res);
    })
  }



}
