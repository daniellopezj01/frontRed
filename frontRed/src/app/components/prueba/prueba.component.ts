import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Select2TemplateFunction, Select2OptionData } from 'ng2-select2';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {
  public exampleData: Array<Select2OptionData>;

  ngOnInit() {
    this.exampleData = [
      {
        id: 'basic1',
        text: 'prueba'
      },
      {
        id: 'basic2',
        text: 'praasd'
      },
      {
        id: 'basic3',
        text: 'Basic 3'
      },
      {
        id: 'basic4',
        text: 'Basic 4'
      }
    ];
  }
}
