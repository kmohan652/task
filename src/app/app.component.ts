import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  room:number;
  adults:number;
  childrens:number;
  addRoomDisable=false;
  removeRommDisable=true;
  addChiDs=false;
  rmChiDs=true;
  addAdltDs=false;
  rmAdltsDs=true;
  
  
  constructor(){
	   this.room=1
  this.adults=1
  this.childrens=0
  }
 addRooms(){
	 
	 if(this.room>=5 ){
		this.addRoomDisable=true;
	 }
	 else{

		 this.room+=1;
		this.addRoomDisable=false; 
		this.removeRommDisable=false;
		if(this.room >(this.adults + this.childrens) ){
			this.adults+=1;
			this.rmAdltsDs=false;
		}
		 this.check();
	 }
 }
 removeRooms(){
	 if(this.room<=1){
		this.removeRommDisable=true;
	 }
	 else{
		 this.room-=1;
		this.removeRommDisable=false;
        this.addRoomDisable=false;	
        this.checkPersons();
 
	 }
 }
 checkPersons(){
	var rmsperson=this.room * 4;
	var totalPrs=this.adults + this.childrens;
	var maxPr=totalPrs-rmsperson;
	 if(rmsperson < totalPrs){
		 console.log(maxPr);
		 if(this.childrens > 0){
			 this.childrens-=maxPr;
			 if(this.childrens<0){
				 this.adults+= this.childrens;
				 this.childrens=0;
			 }
		 }
		 else{
			 this.adults-=maxPr;
		 }
			
		}
	 
		
 }
 
 addAdults(){
	 
	 if(this.room * 4 >(this.adults + this.childrens)){
     this.rmAdltsDs=false;
	 this.addAdltDs=false;
	 this.adults+=1;
	  this.check();
	 }
	 else{
		 this.addAdltDs=true;
		 this.rmAdltsDs=false;
	 }
	
 }
 addChildreens(){
	
	  if(this.room * 4 >(this.adults + this.childrens)){
    if((this.room * 3 > this.childrens) && (this.adults * 3 > this.childrens)){
		 this.childrens+=1;
	  this.rmChiDs=false;
	   this.addChiDs=false;
	     this.check();
	}
	
	 }
	 else{
		 this.addChiDs=true;
		 this.rmChiDs=false;
	 }
 }
 removChildreens(){
	  this.check();
	 if(this.childrens<=1){
		 this.rmChiDs=true;
	 }
	 else{
		 this.childrens-=1;
		 this.rmChiDs=false;
		 this.addChiDs=false;
		 
	 }
 }
 removeAdults(){
	 this.check();
	 if(this.adults<=1){
		 this.rmAdltsDs=true;
	 }
	 else{
		 this.adults-=1;
		 this.rmAdltsDs=false;
		 this.addAdltDs=false;
	 }
 }
 check(){
	
	 if(this.room * 4 >(this.adults + this.childrens)){
		
		 this.addChiDs=false;
  this.rmChiDs=false;
  this.addAdltDs=false;
  this.rmAdltsDs=false;
	 }
 }
}
