import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
};

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {

  httpUrl: any = {
    'listAllProducts': "product_management_API/googlesheet/listAllProducts",
    'updateStocks': "product_management_API/googlesheet/updateStocks",
    'listChannels': "product_management_API/googlesheet/listChannels",
    'addChannelCredential': "product_management_API/googlesheet/addChannelCredential",
    'listChannelCredentials': "product_management_API/googlesheet/listChannelCredentials",
    'importGoogleSheetData': "product_management_API/googlesheet/getProducts",
    'syncChanges': "product_management_API/googlesheet/syncChanges",
    'syncAllDataToLazada': 'product_management_API/lazada/syncAllDataToLazada',
    'syncAllDataToWoo': 'product_management_API/woocommerce/syncAllDataToWoo',
    'syncAllDataToShopee': 'product_management_API/shopee/syncAllDataToShopee',
    'get-order-list': 'product_management_API/lazada/generateOrderList',
    // <=======AUTHENTICATION=======>
    'login': "product_management_API/login",
    'logout': "product_management_API/logout",
    'captcha': "product_management_API/captcha",

    //<========Admin Service=========>
    'addOwner': 'product_management_API/owners',

    //<=======Owner Serivce===========>
    'getAllProperty': 'product_management_API/properties',
    'get-countries': 'product_management_API/country',
    'get-state': 'product_management_API/state',
    'get-city': 'product_management_API/city',
    'settings': 'product_management_API/settings',
    'defaultData': 'product_management_API/settings/defaultData',
    'changepassword': 'product_management_API/changepassword',

  }

  constructor(public http: HttpClient) { }

  getTokenFromLocal() {
    let token = localStorage.getItem("token");
    return token;
  }

  getData(data: any, url: any, callback: any) {
    let headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
    //   .set('Authorization', `Bearer ${this.getTokenFromLocal()}`)

    return this.http.get(environment.apiUrl + url, { headers: headers, params: data }).subscribe((data: any) => {
      callback(<any>data);
    },
      (error: any) => {
        console.log(error)
        // if (error.error.status == 401 && error.error.message == 'Expired token') {
        //   this.handleRefreshToken(url, (res: any) => {
        //     if (res) {
        //       localStorage.setItem("token", res.Bearer);
        //       this.getData({}, url, callback);
        //     }
        //   });

        // }
        if (error) {
          callback(error);
        }
      })
  }

  handleRefreshToken(url: any, callback: any) {
    let refreshToken: any = localStorage.getItem("refreshToken");
    let headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', `Bearer ${refreshToken}`)


    return this.http.get(environment.apiUrl + `hotelapi/refreshToken?role=${localStorage.getItem("roleId")}&user_id=${localStorage.getItem("userId")}`, { headers: headers }).subscribe((data: any) => callback(<any>data));
  }


  postData(data: any, url: any, callback: any) {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
    //  .set('Authorization', `Bearer ${this.getTokenFromLocal()}`)

    return this.http.post(environment.apiUrl + url, data, { headers: headers }).subscribe((data: any) => { callback(data) },
      (error: any) => {
        console.log(error)
        // if (error.error.status == 401 && error.error.message == 'Expired token') {
        //   this.handleRefreshToken(url, (res: any) => {
        //     if (res) {
        //       localStorage.setItem("token", res.Bearer);
        //       this.postData(data, url, callback);
        //     }
        //   });

        // }
        if (error) {
          callback(error);
        }
      })
  }

  postDataWithFile(data: any, url: any, callback: any) {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', `Bearer ${this.getTokenFromLocal()}`)

    return this.http.post(environment.apiUrl + url, data, { headers: headers }).subscribe((data: any) => { callback(data) },
      (error: any) => {
        console.log(error)
        if (error.error.status == 401 && error.error.message == 'Expired token') {
          this.handleRefreshToken(url, (res: any) => {
            if (res) {
              localStorage.setItem("token", res.Bearer);
              this.postData(data, url, callback);
            }
          });

        }
        if (error) {
          callback(error);
        }
      })
  }


  putData(data: any, url: any, callback: any) {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
    //   .set('Authorization', `Bearer ${this.getTokenFromLocal()}`)

    return this.http.put(environment.apiUrl + url, data, { headers: headers }).subscribe((data: any) => { callback(data) },
      (error: any) => {
        console.log(error)
        if (error.error.status == 401 && error.error.message == 'Expired token') {
          this.handleRefreshToken(url, (res: any) => {
            if (res) {
              localStorage.setItem("token", res.Bearer);
              this.putData(data, url, callback);
            }
          });
        }
        if (error) {
          callback(error);
        }
      })

  }

  updateDataWithFile(data: any, url: any, callback: any) {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', `Bearer ${this.getTokenFromLocal()}`)

    return this.http.post(environment.apiUrl + url, data, { headers: headers }).subscribe((data: any) => { callback(data) },
      (error: any) => {
        console.log(error)
        if (error.error.status == 401 && error.error.message == 'Expired token') {
          this.handleRefreshToken(url, (res: any) => {
            if (res) {
              localStorage.setItem("token", res.Bearer);
              this.putData(data, url, callback);
            }
          });
        }
        if (error) {
          callback(error);
        }
      })

  }

  deleteData(data: any, url: any, callback: any) {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', `Bearer ${this.getTokenFromLocal()}`)

    return this.http.delete(environment.apiUrl + url, { headers: headers, body: data }).subscribe((data: any) => callback(data), ((error: any) => callback(error))
    );

  }

}
