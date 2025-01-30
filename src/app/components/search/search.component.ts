import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, ɵnormalizeQueryParams } from '@angular/common';
import { LoaderService } from '../../services/loader.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  imports: [MatButtonModule, CommonModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  public ticket = new FormControl('', [Validators.required]);

  constructor(private loaderService: LoaderService, private router_: Router) {

  }

  public searchByTicket() {
    this.ticket.markAsTouched();
    if (!this.ticket.invalid) {
      this.loaderService.showLoader();
      setTimeout(() => {
        this.loaderService.hideLoader();
        console.log()
        this.router_.navigate(['/searchPackage/statusByTicket'],  { queryParams: { ticket: this.ticket.getRawValue() } });
      }, 1000);
    }
  }

}
