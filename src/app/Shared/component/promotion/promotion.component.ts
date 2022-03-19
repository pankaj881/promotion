import { Component, Input, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {PromotionService} from "../../../Service/promotion.service";
import {PromotionType} from "../../../Service/pormotion.interface";

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent {

  @Input() data!: PromotionType[];

  constructor(private promotionService: PromotionService) {}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
    this.promotionService.setAllPromoLocal(this.data);
  }
}
