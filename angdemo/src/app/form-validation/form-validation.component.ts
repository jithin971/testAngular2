import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {
  
  errorMessage: string = "";
  firstName: any = "";
  createForm: FormGroup;
  isFormValid: boolean;
  formErrors = {
    fname: ''
  }


  private fb: FormBuilder;
  constructor(fb: FormBuilder) {
    this.fb = fb;
    this.isFormValid = false;
  }



  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.createForm = this.fb.group({
      fname: ['',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(6)
        ]]

    })

    this.createForm.valueChanges.subscribe((data) => {

      for (let field in this.formErrors) {
        this.formErrors[field] = '';
        let input = this.createForm.get(field);

        if (input.invalid && input.dirty) {
          for (let err in input.errors) {
            this.formErrors[field] = this.validationMessage[field][err];
          }
        }
      }

      this.isFormValid = this.createForm.valid;
    });
  }

  validationMessage = {
    fname: {
      'required': 'Required Field',
      'minlength': 'mininum length',
      'maxlength': 'maximum length'
    }
  }
  checkerr() {

  }



}
