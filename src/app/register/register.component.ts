import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DemoService } from '../demo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private demo: DemoService,
    private router:  Router,
  ) { 
    this.loginForm = this.formBuilder.group({
      name : ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      type : ['', Validators.required],
      phone : ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const loginPayload = {
        name : this.loginForm.controls.name.value,
        email: this.loginForm.controls.email.value,
        password: this.loginForm.controls.password.value,
        type: this.loginForm.controls.type.value,
        phone: this.loginForm.controls.phone.value
       };
       this.demo.register(loginPayload).subscribe(
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
