import { Component, OnInit } from '@angular/core';
import {GoodsApiService} from '../../services/goods-api.service';
import {ItemInfoInterface} from '../../interfaces/interfaces';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {

  public itemsInfo: Array<ItemInfoInterface>;

  constructor(private goodsApiService: GoodsApiService) { }

  ngOnInit(): void {
    this.getGoods();
  }

  private getGoods(): void {
    this.goodsApiService.getGoods().subscribe(response => {
      this.itemsInfo = response;
    });
  }
}
