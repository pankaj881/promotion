import { Component, Input } from '@angular/core';
import {PromotionType} from "../../../Service/pormotion.interface";

@Component({
  selector: 'app-new-promotion',
  templateUrl: './new-promotion.component.html',
  styleUrls: ['./new-promotion.component.css']
})
export class NewPromotionComponent {

  @Input() data!: PromotionType[];

  constructor() {}
}
