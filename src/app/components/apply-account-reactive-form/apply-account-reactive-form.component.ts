import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sns-apply-account-reactive-form',
  templateUrl: './apply-account-reactive-form.component.html',
  styleUrls: ['./apply-account-reactive-form.component.css']
})
export class ApplyAccountReactiveFormComponent implements OnInit {

  
  accountForm = new FormGroup({
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    mobileNo: new FormControl("", [Validators.required]),
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
