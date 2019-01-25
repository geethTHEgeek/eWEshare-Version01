import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage } from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  

  constructor() {

  }

  ionViewDidLoad(){
    this.initMap();
  }

  initMap() {
    
    let coord = new google.maps.LatLng(6.9407,79.8796);
    let mapopts : google.maps.MapOptions = {
      center: coord,
      zoom:18,
      mapTypeId:google.maps.MapTypeId.ROADMAP


    }

    this.map=new google.maps.Map(this.mapElement.nativeElement,mapopts);

    let marker : google.maps.Marker = new google.maps.Marker({
      map:this.map,
      position:coord

    })

    
  }


  


}