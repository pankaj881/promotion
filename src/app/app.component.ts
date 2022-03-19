import { Component, OnInit } from '@angular/core';
import { PromotionType } from './Service/pormotion.interface';
import { PromotionService } from './Service/promotion.service';
import * as _ from 'lodash';
import { sortBy } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public allPromotion!: PromotionType[];
  public newCustomer!: PromotionType[];

  constructor(private promotionService: PromotionService) {}

  ngOnInit(): void {
      this.promotionService.getDataFromApi()
      .subscribe((result: PromotionType[]) => {
        this.promotionService.setLocal(result)
        this.allPromotion = this.promotionService.getAllPromoLocal() ? this.promotionService.getAllPromoLocal() : sortBy(result, (item) => item.sequence).reverse();
        this.newCustomer = sortBy(result.filter(x => x.onlyNewCustomers), (item) => item.sequence);
      })
  }
}
