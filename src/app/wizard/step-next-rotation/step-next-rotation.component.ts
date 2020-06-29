import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpService} from "../../http.service";
import { FormBuilderComponent } from "../../helpers/form-builder/form-builder.component";

@Component({
  selector: 'app-step-next-rotation',
  templateUrl: './step-next-rotation.component.html',
  styleUrls: ['./step-next-rotation.component.css']
})
export class StepNextRotationComponent implements OnInit {
  private ID;
  public formBuilder;

  constructor(private _http: HttpService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.ID = params["id"];
      this._http._get('2-input.json?id='+this.ID).subscribe(
        response => {
          console.log(response)
          this.formBuilder = response;
        },
        err => {}
      )
    });
  }

  submitForm () {
    this._http._get('login-response.json?id='+this.ID).subscribe(
      response => {
        this.router.navigate(['next-return-date']);
      },
      err => {}
    )

  }

  goBack () {
    this.router.navigate(['']);
  }
}
