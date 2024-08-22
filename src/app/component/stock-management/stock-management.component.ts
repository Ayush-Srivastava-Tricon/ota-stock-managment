import { Component } from '@angular/core';
import { OwnerService } from 'src/app/services/owner.service';
import { AlertService } from 'src/app/shared/alert.service';

@Component({
  selector: 'app-stock-management',
  templateUrl: './stock-management.component.html',
  styleUrls: ['./stock-management.component.scss']
})
export class StockManagementComponent {
  loader: boolean = false;
  searchText: any = '';
  isSorted: any = {}
  otas: any = [
    { name: 'WooCommerce', visible: true, bg_color: 'black' },
    { name: 'Shopee', visible: true, bg_color: 'black' },
    { name: 'Lazada', visible: true, bg_color: 'black' },
    { name: 'TikTok', visible: true, bg_color: 'black' }
  ];
   products: any = [];
  // products: any = [
  //   {
  //     group: "077-NAVY BLUE-PARENT",
  //     data: [
  //       {
  //         name: 'SARAH',
  //         sku: {
  //           number: "077",
  //           color: 'NAVY BLUE',
  //           size: "S"
  //         },
  //         stock: 24,
  //         prices: {
  //           WooCommerce: { price: 245, discount: 199 },
  //           Shopee: { price: 245, discount: 199 },
  //           Lazada: { price: 245, discount: 199 },
  //           TikTok: { price: 245, discount: 199 }
  //         }
  //       },
  //       {
  //         name: 'SARAH',
  //         sku: {
  //           number: "077",
  //           color: 'NAVY BLUE',
  //           size: "XL"
  //         },
  //         stock: 24,
  //         prices: {
  //           WooCommerce: { price: 245, discount: 199 },
  //           Shopee: { price: 245, discount: 199 },
  //           Lazada: { price: 245, discount: 199 },
  //           TikTok: { price: 245, discount: 199 }
  //         }
  //       },
  //       {
  //         name: 'SARAH',
  //         sku: {
  //           number: "077",
  //           color: 'NAVY BLUE',
  //           size: "L"
  //         },
  //         stock: 15,
  //         prices: {
  //           WooCommerce: { price: 245, discount: 199 },
  //           Shopee: { price: 245, discount: 199 },
  //           Lazada: { price: 245, discount: 199 },
  //           TikTok: { price: 245, discount: 199 }
  //         }
  //       },
  //       {
  //         name: 'SARAH',
  //         sku: {
  //           number: "077",
  //           color: 'NAVY BLUE',
  //           size: "M"
  //         },
  //         stock: 24,
  //         prices: {
  //           WooCommerce: { price: 245, discount: 199 },
  //           Shopee: { price: 245, discount: 199 },
  //           Lazada: { price: 245, discount: 199 },
  //           TikTok: { price: 245, discount: 199 }
  //         }
  //       }
  //     ]
  //   },
  //   {
  //     group: "161-NAVY BLUE-PARENT",
  //     data: [
  //       {
  //         name: 'MIRANDA',
  //         sku: {
  //           number: "161",
  //           color: 'NAVY BLUE',
  //           size: "S"
  //         },
  //         stock: 24,
  //         prices: {
  //           WooCommerce: { price: 295, discount: 199 },
  //           Shopee: { price: 295, discount: 199 },
  //           Lazada: { price: 295, discount: 199 },
  //           TikTok: { price: 295, discount: 199 }
  //         }
  //       },
  //       {
  //         name: 'MIRANDA',
  //         sku: {
  //           number: "161",
  //           color: 'NAVY BLUE',
  //           size: "M"
  //         },
  //         stock: 24,
  //         prices: {
  //           WooCommerce: { price: 295, discount: 199 },
  //           Shopee: { price: 295, discount: 199 },
  //           Lazada: { price: 295, discount: 199 },
  //           TikTok: { price: 295, discount: 199 }
  //         }
  //       },
  //       {
  //         name: 'MIRANDA',
  //         sku: {
  //           number: "161",
  //           color: 'NAVY BLUE',
  //           size: "L"
  //         },
  //         stock: 24,
  //         prices: {
  //           WooCommerce: { price: 295, discount: 199 },
  //           Shopee: { price: 295, discount: 199 },
  //           Lazada: { price: 295, discount: 199 },
  //           TikTok: { price: 295, discount: 199 }
  //         }
  //       }

  //     ]
  //   }
  // ];
  filteredProducts: any = [];
  searchQuery = '';
  filteredSuggestions: string[] = [];
  sizeOrder = ['S', 'M', 'L', 'XL', 'XXL'];

  constructor(private _service: OwnerService, private alertService: AlertService) { }

  ngOnInit() {
    this.fetchAllProducts();
    this.filteredProducts = [...this.products]
  }

  fetchAllProducts() {
    this.loader = true;
    this._service.fetchAllProducts((res: any) => {
      if (res.status == 200) {
        this.products = res.responseData;
        this.filteredProducts = [...this.products];
      } else {
        console.log('No product Found!');
      }
      this.loader = false;
    });
  }
  sortSKU(order: 'asc' | 'desc', sortBy: any) {
    this.loader = true;
    this.isSorted[sortBy] = !this.isSorted[sortBy];
    this.sortList(order, sortBy);
    this.loader = false;
  }

  sortList(order: 'asc' | 'desc', sortBy: any) {
    let allProducts = this.products.flatMap((group: any) => group.data.map((product: any) => ({ ...product, group: group.group })));

    if (sortBy == 'sku') {
      allProducts.sort((a: any, b: any) => {
        const numA = parseInt(a.sku.number, 10);
        const numB = parseInt(b.sku.number, 10);
        if (numA !== numB) {
          return order === 'asc' ? numA - numB : numB - numA;
        }

        const colorA = a.sku.color.toLowerCase();
        const colorB = b.sku.color.toLowerCase();
        if (colorA !== colorB) {
          return order === 'asc' ? colorA.localeCompare(colorB) : colorB.localeCompare(colorA);
        }

        const sizeA = this.sizeOrder.indexOf(a.sku.size.toUpperCase());
        const sizeB = this.sizeOrder.indexOf(b.sku.size.toUpperCase());
        return order === 'asc' ? sizeA - sizeB : sizeB - sizeA;
      });

    } else if (sortBy == 'name') {
      allProducts.sort((a: any, b: any) => {
        const nameA = a[sortBy].toLowerCase();
        const nameB = b[sortBy].toLowerCase();
        if (nameA !== nameB) {
          return order === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
        }
      });
    }

    const groupedProducts: any = {};
    allProducts.forEach((product: any) => {
      if (!groupedProducts[product.group]) {
        groupedProducts[product.group] = [];
      }
      groupedProducts[product.group].push(product);
    });

    this.filteredProducts = Object.keys(groupedProducts).map(group => ({
      group: group,
      data: groupedProducts[group]
    }));
  }

  selectAll(event: any) {
    console.log(event.target.checked);
    if (event.target.checked) {
      this.filteredProducts.forEach((e: any) => {
        e.data.forEach((ele: any) => {
          ele.isEditable = true;
        })
      })
    } else {
      this.filteredProducts.forEach((e: any) => {
        e.data.forEach((ele: any) => {
          ele.isEditable = false;
        })
      })
    }
  }

  onSearch(event: any) {
    const query = event.target.value.toLowerCase();
    const allProducts = this.products.flatMap((group: any) => group.data);
    const suggestions = new Set<string>();

    allProducts.forEach((product: any) => {
      const sku = `${product.sku.number}-${product.sku.color.toLowerCase()}-${product.sku.size.toLowerCase()}`;
      if (sku.includes(query)) {
        suggestions.add(sku);
      }
    });

    this.filteredSuggestions = Array.from(suggestions);

    if (query === '') {
      this.filteredProducts = [...this.products];
      this.filteredSuggestions = [];
    } else {
      this.filteredProducts = this.products.map((group: any) => ({
        group: group.group,
        data: group.data.filter((product: any) =>
          `${product.sku.number}-${product.sku.color.toLowerCase()}-${product.sku.size.toLowerCase()}`.includes(query)
        )
      })).filter((group: any) => group.data.length > 0);
    }
  }

  onSelectSuggestion(suggestion: string) {
    const [number, color, size] = suggestion.split('-');
    this.filteredProducts = this.products.map((group: any) => ({
      group: group.group,
      data: group.data.filter((product: any) =>
        product.sku.number === number &&
        product.sku.color.toLowerCase() === color &&
        product.sku.size.toLowerCase() === size
      )
    })).filter((group: any) => group.data.length > 0);

    this.filteredSuggestions = [];
  }

  updateData() {
    this.loader = true;
    var cnt = 0;
    this.filteredProducts.forEach((element: any) => {
      element.data.forEach((dataval: any) => {
        if (dataval.isEditable == true) {
          cnt = 1;
          this._service.updateStocks(dataval, (res: any) => {
            if (res.status == 200) {
              dataval.isEditable = false;
            }
          });
        }
      });
    });
    if (cnt == 0) {
      this.alertService.alert("error", "Please select atleast one Item/Product", "Error", { displayDuration: 3000, pos: 'top' });
    } else {
      this.alertService.alert("success", "Updated Successfully", "Success", { displayDuration: 3000, pos: 'top' });
    }
    this.loader = false;
  }

  importGSheet() {
    this.loader = true;
    this._service.importGoogleSheetData((res: any) => {
      if (res.status == 200) {
        this.alertService.alert("success", res.message, "Success", { displayDuration: 3000, pos: 'top' });
        this.fetchAllProducts();
      } else {
        this.alertService.alert("error", "Please select atleast one Item/Product", "Error", { displayDuration: 3000, pos: 'top' });
      }
      this.loader = false;
    });
  }

  syncChanges() {
    this.loader = true;
    // get data from sync table and send to the channel
    this._service.syncChanges({}, (res: any) => {
      this.loader = false;
      if (res.status == 200) {
        this.alertService.alert("success", res.message, "Success", { displayDuration: 3000, pos: 'top' });
      } else {
        this.alertService.alert("warning", "No Item for Syncing", "Warning", { displayDuration: 3000, pos: 'top' });
      }

    });
  }

  updatePriceAndDiscInSelectedColumn(updatedPrice: any, otaName: any, updateBy: any) {
    this.filteredProducts.forEach((e: any) => {
      e.data.forEach((ele: any) => {
        if (ele.isEditable && ele.prices[otaName.name]) {
          ele.prices[otaName.name][updateBy] = updatedPrice;
        }
      });
    });
  }

  updateStock(updatedStockPrice: any) {
    this.filteredProducts.forEach((e: any) => {
      e.data.forEach((ele: any) => {
        if (ele.isEditable) {
          ele.stock = updatedStockPrice;
        }
      })
    });
  }

}
