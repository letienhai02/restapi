import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute,private router:Router) { }
  id: string | null = "";
  status: number = 0;
  lstReturn: any[] = [];
  addForm = new FormGroup({
    c_code: new FormControl('', []),
    c_name: new FormControl('', []),
    c_order: new FormControl('', []),
    c_status: new FormControl('', []),
    id: new FormControl('', []),
  });


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != undefined && this.id != null && this.id != "") {
      // const params = new HttpParams().append('id', this.id);
      this.http.get('http://localhost:8000/api/categories/' + this.id).subscribe(res => {
        this.lstReturn.push(res);
        this.addForm.controls["c_code"].setValue(this.lstReturn[0].c_code);
        this.addForm.controls["c_name"].setValue(this.lstReturn[0].c_name);
        this.addForm.controls["c_order"].setValue(this.lstReturn[0].c_order);
        this.addForm.controls["c_status"].setValue(this.lstReturn[0].c_status);
        this.addForm.controls["id"].setValue(this.lstReturn[0].id);
      })
    }
  }



  onSubmit() {
    if (this.addForm.controls['id'].value != "") {
      this.http.put('http://localhost:8000/api/categories/'+this.addForm.controls['id'].value, this.addForm.value).subscribe(res => {
        alert(res);
        this.router.navigate(['/page2'])
      }, err => {
        console.log(err);
      });
    } else {
      this.http.post('http://localhost:8000/api/categories/create', this.addForm.value).subscribe(res => {
        alert(res);
        this.router.navigate(['/page2'])
      }, err => {
        console.log(err);
      });
    }
  }
}
