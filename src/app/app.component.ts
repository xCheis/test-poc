import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { LoaderService } from './services/loader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'envios';
  public visibility: boolean = false;

  constructor( loaderService: LoaderService){
    loaderService.loader.subscribe( loader => {
      this.visibility = loader;
    });
  }

}
