import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DemoService } from '../demo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  supplierForm;

  constructor(
    private formBuilder: FormBuilder,
    private demo: DemoService,
    private router:  Router,
  ) { 
    this.supplierForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.email]],
      quantity: ['', [Validators.required]],
      price :['', Validators.required],
    });
  }

  sell() {
    console.log("comingherewerwerwerwe")
      const data = {
        name: this.supplierForm.controls.name.value,
        quantity: this.supplierForm.controls.quantity.value,
        price :this.supplierForm.controls.price.value
       };
       this.demo.addProduct(data).subscribe(
         response => {
           console.log(response)
           this.router.navigate(['home'])
         },
         error => {
           console.log(error);
         }
       )

  }

  ngOnInit() {
  }

}
