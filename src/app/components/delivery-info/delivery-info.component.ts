import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { LoaderService } from '../../services/loader.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delivery-info',
  imports: [MatButtonModule,MatProgressBarModule, MatIconModule, CommonModule],
  templateUrl: './delivery-info.component.html',
  styleUrl: './delivery-info.component.css'
})
export class DeliveryInfoComponent {

  public ticket: string = '';
  public notFound: boolean = false;

  public data = {
    id: "#12ASD1237",
    status :{
      preparando: true,
      enviado: true,
      entregado: false
    }
  };

  constructor ( private _loaderService: LoaderService, private router: ActivatedRoute){
    router.queryParams.subscribe(params => {
      this.ticket = params['ticket'];
      console.log(params)
    });
  }

  ngOnInit(){
    switch(parseInt(this.ticket)){
      case 1234567:
        this.data = {
          id: "#1234567",
          status :{
            preparando: true,
            enviado: false,
            entregado: false
          }
        };
        this.notFound = false;
      break;
      case 1234568:
        this.data = {
          id: "#1234568",
          status :{
            preparando: true,
            enviado: true,
            entregado: false
          }
        };
        this.notFound = false;
      break;
      case 1234569:
        this.data = {
          id: "#1234569",
          status :{
            preparando: true,
            enviado: true,
            entregado: true
          }
        };
        this.notFound = false;
      break;
      default:
      this.notFound = true;
      break;
    }
    this._loaderService.hideLoader();
  }

}
