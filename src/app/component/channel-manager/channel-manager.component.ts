import { Component } from '@angular/core';

@Component({
  selector: 'app-channel-manager',
  templateUrl: './channel-manager.component.html',
  styleUrls: ['./channel-manager.component.scss']
})
export class NetworkSettingComponent {

  siteList:any=[
    {
      name:'Shopee',
      id:1
    },
    {
      name:'Woo Commerce',
      id:3
    },
    {
      name:'Lazda',
      id:4
    },
    {
      name:'Tik Tok',
      id:5
    },
  ];

  siteConfig:any={
    site:null
  };

  newSiteList:any=[];
  showActionDropDown:any={};
  deleteModal:boolean=false;
  currentSiteIdx:number=0;

  constructor(){

  }
  
  insertNewSite(){
    this.siteConfig['status'] = true;
    this.newSiteList.push(this.siteConfig);
    this.resetFields();
  }

  resetFields(){
    this.siteConfig = {site:null}
  }

  toggleDeleteModal(idx:any){
    this.deleteModal = true;
    this.currentSiteIdx = idx;
  }

  closeModal(){
    this.deleteModal = false;
  }

  deleteSite(){
    this.newSiteList.splice(this.currentSiteIdx,1);
    this.closeModal();
  }
}
