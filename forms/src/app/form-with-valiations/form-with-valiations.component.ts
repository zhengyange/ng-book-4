import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-with-valiations',
  templateUrl: './form-with-valiations.component.html',
  styleUrls: ['./form-with-valiations.component.css']
})
export class FormWithValiationsComponent implements OnInit {
 	validForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
  	this.validForm = fb.group({
  		'sku': ['', Validators.compose([Validators.required, skuValidator])]
  	});
  	this.sku = this.validForm.controls['sku'];
  	this.sku.valueChanges.subscribe(
  		(value: string) => {
  			console.log('sku changed to: ', value);
  		}
  	);

  	this.validForm.valueChanges.subscribe(
  		(form: any) => {
  			console.log('form changed to: ', form)
  		}
  	)
  }
  ngOnInit() {
  }

  onSubmit(value: string): void {
  	console.log('you submitted value: ', value);
  }

}

function skuValidator(control: FormControl): { [s: string]: boolean} {
	if(!control.value.match(/^123/)) {
		return {invalidSku: true};
	}
}
