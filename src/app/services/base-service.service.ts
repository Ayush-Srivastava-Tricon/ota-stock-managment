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
    'listAllProducts': "product_management/googlesheet/listAllProducts",
    'updateStocks': "product_management/googlesheet/updateStocks",
    'listChannels': "product_management/googlesheet/listChannels",
    'addChannelCredential': "product_management/googlesheet/addChannelCredential",
    'listChannelCredentials': "product_management/googlesheet/listChannelCredentials",
    'importGoogleSheetData': "product_management/googlesheet/getProducts",
    'syncChanges': "product_management/googlesheet/syncChanges",

    // <=======AUTHENTICATION=======>
    'login': "product_management/login",
    'logout': "product_management/logout",
    'captcha': "product_management/captcha",


    //<========Admin Service=========>
    'addOwner': 'product_management/owners',

    //<=======Owner Serivce===========>
    'getAllProperty': 'product_management/properties',
    'get-countries': 'product_management/country',
    'get-state': 'product_management/state',
    'get-city': 'product_management/city',
    'settings': 'product_management/settings',
    'defaultData': 'product_management/settings/defaultData',
    'changepassword': 'product_management/changepassword',
    'get-order-list': 'product_management/get-order-list',
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
