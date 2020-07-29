import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { SignaturePad } from 'ngx-signaturepad';

@Component({
  selector: 'app-signature-pad',
  templateUrl: './signature-pad.component.html',
  styleUrls: ['./signature-pad.component.css']
})
export class SignaturePadComponent implements OnInit,AfterViewInit {

  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  @Input() fileSrc;
  @Output() signed= new EventEmitter();

  public signingIn;
  signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 5,
    'canvasWidth': 500,
    'canvasHeight': 300
  };

  constructor() {
    // no-op
    this.signingIn = false;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }
  clearSignature(){
    this.signingIn=false;
    this.signaturePad.clear();
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    this.signed.emit(this.signaturePad.toDataURL());
  }

  drawStart() {
    this.signingIn=true;
    // will be notified of szimek/signature_pad's onBegin event
    //console.log('begin drawing');
  }

}
