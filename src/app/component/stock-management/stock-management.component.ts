import { Component } from '@angular/core';

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
  products: any = [
    {
      group: "Blue",
      data: [
        {
          name: 'NATALIE',
          sku: {
            number: "156",
            color: 'blue',
            size: "M"
          },
          stock: 24,
          prices: {
            WooCommerce: { price: 295, discount: 195 },
            Shopee: { price: 295, discount: 195 },
            Lazada: { price: 295, discount: 195 },
            TikTok: { price: 295, discount: 295 }
          }
        },
        {
          name: 'America',
          sku: {
            number: "156",
            color: 'blue',
            size: "XL"
          },
          stock: 24,
          prices: {
            WooCommerce: { price: 295, discount: 195 },
            Shopee: { price: 295, discount: 195 },
            Lazada: { price: 295, discount: 195 },
            TikTok: { price: 295, discount: 295 }
          }
        },
        {
          name: 'KATHERINE',
          sku: {
            number: "156",
            color: 'Blue',
            size: "S"
          },
          stock: 15,
          prices: {
            WooCommerce: { price: 295, discount: 195 },
            Shopee: { price: 295, discount: 195 },
            Lazada: { price: 295, discount: 195 },
            TikTok: { price: 295, discount: 295 }
          }
        },
        {
          name: 'London',
          sku: {
            number: "156",
            color: 'blue',
            size: "L"
          },
          stock: 24,
          prices: {
            WooCommerce: { price: 295, discount: 195 },
            Shopee: { price: 295, discount: 195 },
            Lazada: { price: 295, discount: 195 },
            TikTok: { price: 295, discount: 295 }
          }
        },
        {
          name: 'Australia',
          sku: {
            number: "156",
            color: 'BLUE',
            size: "XXL"
          },
          stock: 24,
          prices: {
            WooCommerce: { price: 295, discount: 195 },
            Shopee: { price: 295, discount: 195 },
            Lazada: { price: 295, discount: 195 },
            TikTok: { price: 295, discount: 295 }
          }
        },
      ]
    },
    {
      group: "Magenta",
      data: [
        {
          name: 'Japan',
          sku: {
            number: "157",
            color: 'magenta',
            size: "S"
          },
          stock: 24,
          prices: {
            WooCommerce: { price: 295, discount: 195 },
            Shopee: { price: 295, discount: 195 },
            Lazada: { price: 295, discount: 195 },
            TikTok: { price: 295, discount: 295 }
          }
        },
        {
          name: 'Ronaldo',
          sku: {
            number: "157",
            color: 'magenta',
            size: "M"
          },
          stock: 24,
          prices: {
            WooCommerce: { price: 295, discount: 195 },
            Shopee: { price: 295, discount: 195 },
            Lazada: { price: 295, discount: 195 },
            TikTok: { price: 295, discount: 295 }
          }
        },
        {
          name: 'Messi',
          sku: {
            number: "157",
            color: 'magenta',
            size: "L"
          },
          stock: 24,
          prices: {
            WooCommerce: { price: 295, discount: 195 },
            Shopee: { price: 295, discount: 195 },
            Lazada: { price: 295, discount: 195 },
            TikTok: { price: 295, discount: 295 }
          }
        },
        {
          name: 'Air Jordan',
          sku: {
            number: "157",
            color: 'magenta',
            size: "XL"
          },
          stock: 24,
          prices: {
            WooCommerce: { price: 295, discount: 195 },
            Shopee: { price: 295, discount: 195 },
            Lazada: { price: 295, discount: 195 },
            TikTok: { price: 295, discount: 295 }
          }
        },
        {
          name: 'Nike',
          sku: {
            number: "157",
            color: 'magenta',
            size: "XXL"
          },
          stock: 24,
          prices: {
            WooCommerce: { price: 295, discount: 195 },
            Shopee: { price: 295, discount: 195 },
            Lazada: { price: 295, discount: 195 },
            TikTok: { price: 295, discount: 295 }
          }
        },

      ]
    },
    {
      group: "Orange",
      data: [
        {
          name: 'Japan',
          sku: {
            number: "154",
            color: 'Orange',
            size: "S"
          },
          stock: 24,
          prices: {
            WooCommerce: { price: 295, discount: 195 },
            Shopee: { price: 295, discount: 195 },
            Lazada: { price: 295, discount: 195 },
            TikTok: { price: 295, discount: 295 }
          }
        },
        {
          name: 'Ronaldo',
          sku: {
            number: "154",
            color: 'Orange',
            size: "M"
          },
          stock: 24,
          prices: {
            WooCommerce: { price: 295, discount: 195 },
            Shopee: { price: 295, discount: 195 },
            Lazada: { price: 295, discount: 195 },
            TikTok: { price: 295, discount: 295 }
          }
        },
        {
          name: 'Messi',
          sku: {
            number: "154",
            color: 'Orange',
            size: "L"
          },
          stock: 24,
          prices: {
            WooCommerce: { price: 295, discount: 195 },
            Shopee: { price: 295, discount: 195 },
            Lazada: { price: 295, discount: 195 },
            TikTok: { price: 295, discount: 295 }
          }
        },
        {
          name: 'Air Jordan',
          sku: {
            number: "154",
            color: 'Orange',
            size: "XL"
          },
          stock: 24,
          prices: {
            WooCommerce: { price: 295, discount: 195 },
            Shopee: { price: 295, discount: 195 },
            Lazada: { price: 295, discount: 195 },
            TikTok: { price: 295, discount: 295 }
          }
        },
        {
          name: 'Nike',
          sku: {
            number: "154",
            color: 'Orange',
            size: "XXL"
          },
          stock: 24,
          prices: {
            WooCommerce: { price: 295, discount: 195 },
            Shopee: { price: 295, discount: 195 },
            Lazada: { price: 295, discount: 195 },
            TikTok: { price: 295, discount: 295 }
          }
        },

      ]
    }
  ];
  filteredProducts: any = [];
  searchQuery = '';
  filteredSuggestions: string[] = [];
  sizeOrder = ['S', 'M', 'L', 'XL', 'XXL'];

  constructor() { }

  ngOnInit() {
    this.filteredProducts = [...this.products];
  }

  sortSKU(order: 'asc' | 'desc', sortBy: any) {
    this.isSorted[sortBy] = !this.isSorted[sortBy];
    this.sortList(order, sortBy);
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

  saveData() {
    console.log(this.filteredProducts);
  }


}
