import { Component } from '@angular/core';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent {

  orderList: any = [];
  loader: boolean = false;
  filteredData: any = [];
  showDropdown: boolean = false;
  filteredOtaResult: any = [];
  uniqueChannels: any = [];
  constructor(private _service: OwnerService) {

  }

  ngOnInit() {
    this.fetchOrderList();
  }

  fetchOrderList() {
    this.loader = true;
    this._service.fetchOrderList((res: any) => {
      if (res.status == 200) {
        this.orderList = res.data;
        this.loader = false;
        this.filteredData = [...this.orderList];
        this.getUniqueChannelNames();
      } else {
        this.loader = false;
        // this.orderList = [
        //   {
        //     "id": 3,
        //     "sku_id": 22276292422,
        //     "channel_name": "Lazda",
        //     "sku": "204-ฟ้า-M",
        //     "items_count": 2,
        //     "order_id": 898691793797984,
        //     "item_price": "580.00",
        //     "paid_price": "276.15",
        //     "voucher_amount": "18.85",
        //     "currency": "THB",
        //     "product_detail_url": "https://www.lazada.co.th/products/i5178058409-s22276292422.html?urlFlag=true&mp=1",
        //     "order_status": "delivered",
        //     "status": 0,
        //     "add_time": "2024-08-09 14:48:44",
        //     "update_time": "2024-08-09 14:48:44"
        //   },
        //   {
        //     "id": 3,
        //     "sku_id": 22276292422,
        //     "channel_name": "Lazda",
        //     "sku": "204-ฟ้า-M",
        //     "items_count": 2,
        //     "order_id": 898691793797984,
        //     "item_price": "580.00",
        //     "paid_price": "276.15",
        //     "voucher_amount": "18.85",
        //     "currency": "THB",
        //     "product_detail_url": "https://www.lazada.co.th/products/i5178058409-s22276292422.html?urlFlag=true&mp=1",
        //     "order_status": "delivered",
        //     "status": 0,
        //     "add_time": "2024-08-09 14:48:44",
        //     "update_time": "2024-08-09 14:48:44"
        //   },
        //   {
        //     "id": 3,
        //     "sku_id": 22276292422,
        //     "channel_name": "Lazda",
        //     "sku": "204-ฟ้า-M",
        //     "items_count": 2,
        //     "order_id": 898691793797984,
        //     "item_price": "580.00",
        //     "paid_price": "276.15",
        //     "voucher_amount": "18.85",
        //     "currency": "THB",
        //     "product_detail_url": "https://www.lazada.co.th/products/i5178058409-s22276292422.html?urlFlag=true&mp=1",
        //     "order_status": "delivered",
        //     "status": 0,
        //     "add_time": "2024-08-09 14:48:44",
        //     "update_time": "2024-08-09 14:48:44"
        //   },
        //   {
        //     "id": 3,
        //     "sku_id": 22276292422,
        //     "channel_name": "Nitish",
        //     "sku": "204-ฟ้า-M",
        //     "items_count": 2,
        //     "order_id": 898691793797984,
        //     "item_price": "580.00",
        //     "paid_price": "276.15",
        //     "voucher_amount": "18.85",
        //     "currency": "THB",
        //     "product_detail_url": "https://www.lazada.co.th/products/i5178058409-s22276292422.html?urlFlag=true&mp=1",
        //     "order_status": "delivered",
        //     "status": 0,
        //     "add_time": "2024-08-09 14:48:44",
        //     "update_time": "2024-08-09 14:48:44"
        //   },
        //   {
        //     "id": 3,
        //     "sku_id": 22276292422,
        //     "channel_name": "WooCommerce",
        //     "sku": "204-ฟ้า-M",
        //     "items_count": 2,
        //     "order_id": 898691793797984,
        //     "item_price": "580.00",
        //     "paid_price": "276.15",
        //     "voucher_amount": "18.85",
        //     "currency": "THB",
        //     "product_detail_url": "https://www.lazada.co.th/products/i5178058409-s22276292422.html?urlFlag=true&mp=1",
        //     "order_status": "delivered",
        //     "status": 0,
        //     "add_time": "2024-08-09 14:48:44",
        //     "update_time": "2024-08-09 14:48:44"
        //   },
        //   {
        //     "id": 3,
        //     "sku_id": 22276292422,
        //     "channel_name": "Lazda",
        //     "sku": "204-ฟ้า-M",
        //     "items_count": 2,
        //     "order_id": 898691793797984,
        //     "item_price": "580.00",
        //     "paid_price": "276.15",
        //     "voucher_amount": "18.85",
        //     "currency": "THB",
        //     "product_detail_url": "https://www.lazada.co.th/products/i5178058409-s22276292422.html?urlFlag=true&mp=1",
        //     "order_status": "delivered",
        //     "status": 0,
        //     "add_time": "2024-08-09 14:48:44",
        //     "update_time": "2024-08-09 14:48:44"
        //   },
        //   {
        //     "id": 3,
        //     "sku_id": 22276292422,
        //     "channel_name": "Lazda",
        //     "sku": "204-ฟ้า-M",
        //     "items_count": 2,
        //     "order_id": 898691793797984,
        //     "item_price": "580.00",
        //     "paid_price": "276.15",
        //     "voucher_amount": "18.85",
        //     "currency": "THB",
        //     "product_detail_url": "https://www.lazada.co.th/products/i5178058409-s22276292422.html?urlFlag=true&mp=1",
        //     "order_status": "delivered",
        //     "status": 0,
        //     "add_time": "2024-08-09 14:48:44",
        //     "update_time": "2024-08-09 14:48:44"
        //   },
        //   {
        //     "id": 3,
        //     "sku_id": 22276292422,
        //     "channel_name": "Lazda",
        //     "sku": "204-ฟ้า-M",
        //     "items_count": 2,
        //     "order_id": 898691793797984,
        //     "item_price": "580.00",
        //     "paid_price": "276.15",
        //     "voucher_amount": "18.85",
        //     "currency": "THB",
        //     "product_detail_url": "https://www.lazada.co.th/products/i5178058409-s22276292422.html?urlFlag=true&mp=1",
        //     "order_status": "delivered",
        //     "status": 0,
        //     "add_time": "2024-08-09 14:48:44",
        //     "update_time": "2024-08-09 14:48:44"
        //   },
        // ];
        // this.filteredData = [...this.orderList];
        // this.getUniqueChannelNames();
      }
    });

  }

  getUniqueChannelNames() {
    const channelObj: any = {};
    for (let item of this.filteredData) {
      if (!(channelObj.hasOwnProperty(item.channel_name))) {
        channelObj[item.channel_name] = item.channel_name;
      }
    };
    for (let item in channelObj) {
      this.uniqueChannels.push(item);
    }
  }

  searchOta(event: any) {
    this.loader = true;
    this.filteredData = [...this.orderList];
    if (event.target.value.trim()) {
      this.filteredOtaResult = this.uniqueChannels.filter((channel: any) => channel.toLowerCase().includes(event.target.value));
      if (this.filteredOtaResult.length == 0) this.showDropdown = true;
      this.loader = false;
    } else {
      this.filteredOtaResult = [];
      this.showDropdown = false;
      this.loader = false;
    }
  }

  selectOta(channel: any) {
    this.filteredData = this.orderList.filter((e: any) => channel == e.channel_name);
    this.filteredOtaResult.length = 0;
  }
  
}
