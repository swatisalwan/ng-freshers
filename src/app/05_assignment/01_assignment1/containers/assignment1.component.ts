import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})

//Adding Input Element (Text Field)

export class Assignment1Component {

  showValue :string;

  onDataInput(data: string) {
    this.showValue = data;
  }

}
