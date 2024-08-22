import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseServiceService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class OwnerService extends BaseServiceService {

  constructor(http: HttpClient) {
    super(http);
  }

  fetchAllProducts(callback: any) {
    this.getData({}, this.httpUrl['listAllProducts'], callback)
  }
  updateStocks(param: any, callback: any) {
    this.putData(param, this.httpUrl['updateStocks'], callback)
  }

  listChannels(callback: any) {
    this.getData({}, this.httpUrl['listChannels'], callback)
  }

  listChannelCredentials(callback: any) {
    this.getData({}, this.httpUrl['listChannelCredentials'], callback)
  }

  addChannelCredential(param: any, callback: any) {
    this.postData(param, this.httpUrl['addChannelCredential'], callback)
  }

  importGoogleSheetData(callback: any) {
    this.getData({}, this.httpUrl['importGoogleSheetData'], callback)
  }

  syncChanges(param: any, callback: any) {
    this.postData(param, this.httpUrl['syncChanges'], callback)
  }

  syncAllDataToWoo(param: any, callback: any) {
    this.putData(param, this.httpUrl['syncAllDataToWoo'], callback)
  }

  syncAllDataToLazada(param: any, callback: any) {
    this.putData(param, this.httpUrl['syncAllDataToLazada'], callback)
  }

  syncAllDataToShopee(param: any, callback: any) {
    this.putData(param, this.httpUrl['syncAllDataToShopee'], callback)
  }

  fetchCountry(callback: any) {
    this.getData({}, this.httpUrl['get-countries'], callback);
  }

  fetchState(countryId: any, callback: any) {
    this.getData({}, `${this.httpUrl['get-state']}?country_id=${countryId}`, callback);
  }

  fetchCity(countryId: any, stateId: any, callback: any) {
    this.getData({}, `${this.httpUrl['get-city']}/?country_id=${countryId}&state_id=${stateId}`, callback);
  }

  saveDefaultSetting(param: any, callback: any) {
    this.postData(param, this.httpUrl['settings'], callback)
  }

  fetchDefaultUserSetting(user_id: any, role_id: any, callback: any) {
    this.getData({}, `${this.httpUrl['defaultData']}?user_id=${user_id}&role_id=${role_id}`, callback)
  }

  changePassword(param: any, callback: any) {
    this.putData(param, this.httpUrl['changepassword'], callback)
  }

  addMailTemplate(param: any, callback: any) {
    this.postData(param, this.httpUrl['addMailTemplate'], callback)
  }

  fetchEmailTempalte(param: any, callback: any) {
    this.getData({}, `${this.httpUrl['fetchEmailTemplate']}?role_id=${param.role_id}&user_id=${param.user_id}`, callback)
  }

  fetchEmailTempalteById(template_id: any, callback: any) {
    this.getData({}, `${this.httpUrl['viewMailTemplate']}/${template_id}`, callback)
  }

  deleteTemplate(template_id: any, callback: any) {
    this.deleteData({}, `${this.httpUrl['pDeleteRec']}/${template_id}`, callback)
  }

  updateTemplate(param: any, callback: any) {
    this.putData(param, this.httpUrl['updateTemplate'], callback)
  }

  editOwner(params: any, callback: any) {
    this.putData(params, this.httpUrl['editOwner'], callback)
  }
  
  fetchOrderList(callback: any) {
    this.getData({}, this.httpUrl['get-order-list'], callback);
  }
}
