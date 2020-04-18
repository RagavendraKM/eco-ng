import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DemoService } from '../demo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private demo: DemoService,
    private router:  Router,
  ) { 
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    if (this.loginForm.valid) {
      const loginPayload = {
        email: this.loginForm.controls.email.value,
        password: this.loginForm.controls.password.value // convert password to base64
       };
       this.demo.login(loginPayload).subscribe(
         response => {
           console.log(response)
           this.router.navigate(['home'])
         },
         error => {
           console.log(error);
         }
       )
    }
  }

  ngOnInit() {
  }

}
