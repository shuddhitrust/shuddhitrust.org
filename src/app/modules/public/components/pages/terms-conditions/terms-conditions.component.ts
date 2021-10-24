import { Component, OnInit } from '@angular/core';
import { uiroutes } from 'src/app/shared/ui-routes';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss'],
})
export class TermsConditionsComponent implements OnInit {
  refund = uiroutes.REFUND_ROUTE;
  contact = uiroutes.CONTACT_ROUTE;
  constructor() {}

  ngOnInit(): void {}
}
