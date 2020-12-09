import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-fit',
  templateUrl: './best-fit.component.html',
  styleUrls: ['./best-fit.component.scss']
})
export class BestFitComponent implements OnInit {

  @Input() showInstructions!: boolean;
  @Input() loadingBestFit!: boolean;
  @Input() bestFit: any;

  constructor() {
  }

  ngOnInit(): void {
  }


  parse(string: string) {
    return Number(string);
  }

  
}
