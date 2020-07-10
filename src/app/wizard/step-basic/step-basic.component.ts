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
  public page;
  private step;
  constructor(private _http: HttpService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private renderer: Renderer2
  ) {
    this.step=0;
    this.page= {
      pageContent:{
        initialConfig: true,
        controls: {"Instruction": "No Reference Found! Please check your URL or contact administrator"}
      },
      pageInfo:{
        banner1: "/WorkflowDemo/Content/Images/Civeo_trans_400.png",
        banner2: "/WorkflowDemo/Content/Images/Civeo_Front_Desk.png",
        footer: "© 2020 - INNfinity ∞ Workflow Web"
      },
    }
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      this.ID = params["ID"];
      if(this.ID) {
        this.renderer.setAttribute(document.body, 'class', 'loader');
        //this._http._get('login-input.json?id=' + this.ID).subscribe(
        this._http._get(this.ID+'').subscribe(
          response => {
            console.log(response);
            this.page = response;
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
    console.log(this.page);
    if (this.inputValidated()) {
      this.step++;
      this.renderer.setAttribute(document.body, 'class', 'loader');
      //this._http._get('workflow.json').subscribe(
      this._http._post(this.ID+'/continue', this.page.pageContent).subscribe(
        response => {
          console.log(this.step);
          this.page.pageInfo = response;
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
    this.page.pageContent.controls.filter(function(field){
      if((field.visibleFields == 4 || field.visibleFields == 5) && field.isRequired) {
        if(field.modifiedFormattedValue == '') {
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
