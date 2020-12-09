import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fits',
  templateUrl: './fits.component.html',
  styleUrls: ['./fits.component.scss']
})
export class FitsComponent implements OnInit {

  @Input() fit!: any;

  @Input() showInstructions!: boolean;

  @Input() loadingFits!: boolean;

  constructor() { }

  ngOnInit(): void {
  }


}
