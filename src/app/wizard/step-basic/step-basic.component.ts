import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpService} from "../../http.service";
import { FormBuilderComponent } from "../../helpers/form-builder/form-builder.component";

@Component({
  selector: 'app-step-basic',
  templateUrl: './step-basic.component.html',
  styleUrls: ['./step-basic.component.css']
})
export class StepBasicComponent implements OnInit {
  private ID;
  public formBuilder;
  constructor(private _http: HttpService,
              private router: Router,
              private activatedRoute: ActivatedRoute ) {

  }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);
      this.ID = params["id"];
      this._http._get('login-input.json?id='+this.ID).subscribe(
        response => {
          console.log(response);
          this.formBuilder = response;
        },
        err => {}
      )
    });
  }

  submitForm () {
    this._http._get('login-response.json?id='+this.ID).subscribe(
      response => {
        this.router.navigate(['next-rotation'], { queryParams: { id: this.ID}});
      },
      err => {}
    )
  }

}
