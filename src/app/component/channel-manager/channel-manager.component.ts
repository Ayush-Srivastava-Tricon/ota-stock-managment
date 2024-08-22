import { Component } from '@angular/core';
import { OwnerService } from 'src/app/services/owner.service';
import { AlertService } from 'src/app/shared/alert.service';

@Component({
  selector: 'app-channel-manager',
  templateUrl: './channel-manager.component.html',
  styleUrls: ['./channel-manager.component.scss']
})
export class NetworkSettingComponent {
  loader: boolean = false;
  siteConfig: any = {
    site: null
  };

  siteList: any = [];
  newSiteList: any = [];
  showActionDropDown: any = {};
  deleteModal: boolean = false;
  currentSiteIdx: number = 0;

  constructor(private _service: OwnerService, private alertService: AlertService) {

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

  fetchChannelCredentials() {
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

  syncAllData(channel: any) {
    this.loader = true;
    if (channel.toLowerCase().trim().replace(/[_\-\s]/g, "") == 'woocommerce') {
      // get data from Main product table and send to the channel
      this._service.syncAllDataToWoo({}, (res: any) => {
//console.log(res);
        
        if (res.status == 200) {
          this.loader = false;
          this.alertService.alert("success","Successfully Synced", "Success", { displayDuration: 3000, pos: 'top' });
        } else {
          this.loader = false;
          this.alertService.alert("warning", "Syncing Failed", "Warning", { displayDuration: 3000, pos: 'top' });
        }
       
      });

    }
    else if (channel.toLowerCase().trim().replace(/[_\-\s]/g, "") == 'lazada') {
      // get data from Main product table and send to the channel
      this._service.syncAllDataToLazada({}, (res: any) => {
      //  console.log(res);
        if (res.status == 200) {
          this.loader = false;
          this.alertService.alert("success", "Successfully Synced", "Success", { displayDuration: 3000, pos: 'top' });
        } else {
          this.loader = false;
          this.alertService.alert("warning", "Syncing Failed", "Warning", { displayDuration: 3000, pos: 'top' });
        }
      });
    }
    else if (channel.toLowerCase().trim().replace(/[_\-\s]/g, "") == 'shopee') {
      // get data from Main product table and send to the channel
      this.alertService.alert("warning", "Syncing Functionality is not implemented for Shopee", "Warning", { displayDuration: 3000, pos: 'top' });
      // this._service.syncAllDataToShopee({}, (res: any) => {
      //   this.loader = false;
      //   if (res.status == 200) {
      //     this.alertService.alert("success", res.message, "Success", { displayDuration: 3000, pos: 'top' });
      //   } else {
      //     this.alertService.alert("warning", "Syncing Failed", "Warning", { displayDuration: 3000, pos: 'top' });
      //   }

      // });
    } else if (channel.toLowerCase().trim().replace(/[_\-\s]/g, "") == 'tiktok') {
      this.alertService.alert("warning", "Syncing Functionality is not implemented for Tik Tok", "Warning", { displayDuration: 3000, pos: 'top' });
    } else {
      this.alertService.alert("warning", "Channel Name [ " + channel + " ] is not correct !", "Warning", { displayDuration: 3000, pos: 'top' });
    }

  }
}
