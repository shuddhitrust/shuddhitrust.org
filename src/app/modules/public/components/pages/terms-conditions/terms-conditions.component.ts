import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { uiroutes } from 'src/app/shared/ui-routes';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss'],
})
export class TermsConditionsComponent implements OnInit {
  refund = uiroutes.REFUND_ROUTE;
  contact = uiroutes.CONTACT_ROUTE;
  constructor(private router: Router) {}

  routeTo(route) {
    this.router.navigate([route]);
  }

  ngOnInit(): void {}
}
