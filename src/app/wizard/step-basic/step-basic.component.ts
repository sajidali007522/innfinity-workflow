import {AfterViewInit, Component, Input, OnInit, Renderer2} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpService} from "../../http.service";
import { FormBuilderComponent } from "../../helpers/form-builder/form-builder.component";

@Component({
  selector: 'app-step-basic',
  templateUrl: './step-basic.component.html',
  styleUrls: ['./step-basic.component.css']
})
export class StepBasicComponent implements OnInit {
  @Input() submitFired;

  private ID;
  public page;
  private step=0;
  private intervalTime;
  public wait=0;
  public error=false;

  constructor(private _http: HttpService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private renderer: Renderer2
  ) {
    this.page= {
      pageContent:{
        initialConfig: true,
        controls: [{"Instruction": "No Reference Found! Please check your URL or contact administrator"}]
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
      this.ID = params["ID"];
      if(this.ID) {
        this.renderer.setAttribute(document.body, 'class', 'loader');
        this._http._get(this.ID+'').subscribe(
          response => {
            console.log(response);
            this.page = response;
            this.setTimer(response['pageContent']['controls'][0]);
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

  onSubmitfired (isEnterPressed) {
    if(isEnterPressed){
      this.submitForm();
    }
  }
  setTimer (field) {
    if(field.dataType == 'Waiting') {
      this.wait = Math.ceil(Number(field.formattedValue/1000))+5;
      this.intervalTime = setInterval(() => {
        this.wait = this.wait-1;
        if(this.wait < 0) {
          field.modifiedFormattedValue = field.formattedValue;
          clearInterval(this.intervalTime);
          this.submitForm();
        }
      }, 1000);
    }
  }

  submitForm () {
    if (this.inputValidated()) {
      this.error = false;
      this.renderer.setAttribute(document.body, 'class', 'loader');
      //this._http._get('workflow.json').subscribe(
      this._http._post(this.ID+'/continue', this.page.pageContent).subscribe(
        response => {
          this.page.pageContent = response;
          this.setTimer(response['controls'][0]);
        },
        err => {
        },
        () => {
          this.renderer.setAttribute(document.body, 'class', '');
        }
      )
    } else {
      this.error=true;
    }
  }

  resetThisID () {
    this.renderer.setAttribute(document.body, 'class', 'loader');
    this._http._post(this.ID+'/ResetTestWorkflow', this.page.pageContent).subscribe(
      response => {
        this.page.pageContent = response;
      },
      err => {
      },
      () => {
        window.location.href = '/'+this.ID;
      }
    )
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
