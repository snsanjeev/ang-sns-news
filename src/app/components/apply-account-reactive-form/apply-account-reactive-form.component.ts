import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sns-apply-account-reactive-form',
  templateUrl: './apply-account-reactive-form.component.html',
  styleUrls: ['./apply-account-reactive-form.component.css']
})
export class ApplyAccountReactiveFormComponent implements OnInit {

  emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/


  
  accountForm = new FormGroup({
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.pattern(this.emailRegex)]),
    password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(32)]),
    mobileNo: new FormControl("", [Validators.required, Validators.maxLength(10)]),
    age: new FormControl("", [Validators.required]),
    taxId: new FormControl("", [Validators.required]),
    checkCredit: new FormControl("", [Validators.required])
  })
  constructor() { }

  ngOnInit(): void {
  }

  applyAccount() {
    console.log(this.accountForm)
  }

  get firstName() {
    return this.accountForm.get("firstName")
  }

  get lastName() {
    return this.accountForm.get("lastName")
  }

  get email() {
    return this.accountForm.get("email")
  }

  get password() {
    return this.accountForm.get("password")
  }

  get mobileNo() {
    return this.accountForm.get("mobileNo")
  }

  get age() {
    return this.accountForm.get("age")
  }

  get taxId() {
    return this.accountForm.get("taxId")
  }

  get checkCredit() {
    return this.accountForm.get("checkCredit")
  }
}
