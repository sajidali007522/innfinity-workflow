import {Component, OnInit, Renderer2} from '@angular/core';
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
  private step;
  constructor(private _http: HttpService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private renderer: Renderer2
  ) {
    this.step=0;
    this.formBuilder= {
      initialConfig: true,
      Controls:[
        {"Instruction": "No Reference Found! Please check your URL or contact administrator"}
      ]
    }
  }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);
      this.ID = params["id"];
      if(this.ID) {
        this.renderer.setAttribute(document.body, 'class', 'loader');
        this._http._get('login-input.json?id=' + this.ID).subscribe(
          // this._http._get('workflow?ModelOnly=true&id='+this.ID).subscribe(
          response => {
            console.log(response);
            this.formBuilder = response;
          },
          err => {
          },
          () => {
            this.renderer.setAttribute(document.body, 'class', '');
          }
        )
      }
    });
  }

  submitForm () {
    console.log(this.formBuilder);
    if (this.inputValidated()) {
      this.step++;
      this.renderer.setAttribute(document.body, 'class', 'loader');
      this._http._get('workflow.json').subscribe(
      // this._http._post('ContinueWorkflowModelOnly', this.formBuilder).subscribe(
        response => {
          console.log(this.step);
          this.formBuilder = response[this.step];
        },
        err => {
        },
        () => {
          this.renderer.setAttribute(document.body, 'class', '');
        }
      )
    }
  }

  inputValidated () {
    let validated = true;
    this.formBuilder.Controls.filter(function(field){
      if((field.VisibleFields == 4 || field.VisibleFields == 5) && field.IsRequired) {
        if(field.ModifiedFormattedValue == '') {
          field.errorMessage = "Field is Required";
          validated = false;
        } else {
          field.errorMessage = "";
        }
      }
    });
    return validated;
  }

}
