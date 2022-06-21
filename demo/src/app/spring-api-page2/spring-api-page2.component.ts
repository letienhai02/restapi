import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-spring-api-page2',
  templateUrl: './spring-api-page2.component.html',
  styleUrls: ['./spring-api-page2.component.scss']
})
export class SpringApiPage2Component implements OnInit {


  constructor(private http: HttpClient, private route: ActivatedRoute,private router:Router) { }
  id: string | null = "";
  status: number = 0;
  lstReturn: any;
  addForm = new FormGroup({
    code: new FormControl('', []),
    name: new FormControl('', []),
    order: new FormControl('', []),
    status: new FormControl('', []),
    id: new FormControl('', []),
  });


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != undefined && this.id != null && this.id != "") {
      // const params = new HttpParams().append('id', this.id);
      this.http.get('http://localhost:8080/api/categories/' + this.id).subscribe(res => {
        
        this.lstReturn= JSON.parse(JSON.stringify(res));
        this.addForm.controls["code"].setValue(this.lstReturn.code);
        this.addForm.controls["name"].setValue(this.lstReturn.name);
        this.addForm.controls["order"].setValue(this.lstReturn.order);
        this.addForm.controls["status"].setValue(this.lstReturn.status);
        this.addForm.controls["id"].setValue(this.lstReturn.id);
      })
    }
  }



  onSubmit() {
    if (this.addForm.controls['id'].value != "") {
      this.http.put('http://localhost:8080/api/categories/'+this.addForm.controls['id'].value, this.addForm.value).subscribe(res => {
        alert('succes')
        this.router.navigate(['/spring-api'])
      }, err => {
        console.log(err);
      });
    } else {
      this.http.post('http://localhost:8080/api/categories', this.addForm.value).subscribe(res => {
        alert('succes')
        this.router.navigate(['/spring-api'])
      }, err => {
        console.log(err);
      });
    }
  }

}
