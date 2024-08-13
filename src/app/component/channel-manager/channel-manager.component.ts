import { Component } from '@angular/core';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-channel-manager',
  templateUrl: './channel-manager.component.html',
  styleUrls: ['./channel-manager.component.scss']
})
export class NetworkSettingComponent {

  siteConfig: any = {
    site: null
  };

  siteList: any = [];
  newSiteList: any = [];
  showActionDropDown: any = {};
  deleteModal: boolean = false;
  currentSiteIdx: number = 0;

  constructor(private _service: OwnerService) {

  }
  
  ngOnInit() {
    this._service.listChannels((res: any) => {
      if (res.status == 200) {  
        this.siteList = res.data;
      } else {
        console.log('No Record Found!');
      }
    });

    this.fetchChannelCredentials();
  }

  fetchChannelCredentials(){
    this._service.listChannelCredentials((res: any) => {
      if (res.status == 200) {  
        this.newSiteList = res.data;
      } else {
        console.log('No Record Found!');
      }
    });
  }

  insertNewSite() {
    this.siteConfig['status'] = true;
    this._service.addChannelCredential(this.siteConfig, (res: any) => {
      this.resetFields();
      if (res.status == 200) {
         console.log(res.message);
      } else {
        this.resetFields();
        console.log('No product Found!');
      }
      this.fetchChannelCredentials();
    });
  }

  resetFields() {
    this.siteConfig = { site: null }
  }

  toggleDeleteModal(idx: any) {
    this.deleteModal = true;
    this.currentSiteIdx = idx;
  }

  closeModal() {
    this.deleteModal = false;
  }

  deleteSite() {
    this.newSiteList.splice(this.currentSiteIdx, 1);
    this.closeModal();
  }
}
