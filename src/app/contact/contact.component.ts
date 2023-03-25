import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class CONTACTComponent {
  name:string='';
  email:string='';
  phone:string='';
  message:string='';
  isName:boolean=true;
  isEmail:boolean=true;
  isPhone:boolean=true;
  isMessage:boolean=true;
  isclickName:boolean=false;
  onclickName(){
    this.isclickName=true;
    this.isName=true;
    this.isEmail=true;
    this.isPhone=true;
    this.isMessage=true;
  }
  clickBtn(){
    if(this.name==''){
        this.isName=false;
    } if(this.email==''){
      this.isEmail=false;
    } if(this.phone==''){
      this.isPhone=false;
    } if(this.message==''){
      this.isMessage=false;
    }
  }
  
}
