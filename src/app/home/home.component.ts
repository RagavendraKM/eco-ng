import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
import { SocketioService } from '../socketio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

  this.socketService.setupSocketConnection().subscribe(
    result => {
      this.alldata.push(result.data);
      console.log(result);
    }
  )
  }

}
