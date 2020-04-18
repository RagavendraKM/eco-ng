import { Component, OnInit, OnDestroy, Input  } from '@angular/core';
import { DemoService } from '../demo.service';
import { SocketioService } from '../socketio.service';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/interval';
// import 'rxjs/add/operator/startWith';
// import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // @Input() products$: Observable<any>;
  alldata = [];
  constructor(
    private demo: DemoService,
    private socketService: SocketioService
    ) { }

  ngOnInit() {
    this.demo.getProducts().subscribe(
      data => {
        console.log(data);
        this.alldata = data;
      }
    )

  // this.socketService.setupSocketConnection().subscribe(
  //   result => {
  //     this.alldata.push(result.data);
  //     console.log(result);
  //   }
  // )
  }

}
