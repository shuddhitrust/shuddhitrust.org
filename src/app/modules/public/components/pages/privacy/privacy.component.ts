import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { uiroutes } from 'src/app/shared/ui-routes';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss'],
})
export class PrivacyComponent implements OnInit {
  contact = uiroutes.CONTACT_ROUTE;
  constructor(private router: Router) {}

  routeTo(route) {
    this.router.navigate([route]);
  }

  ngOnInit(): void {}
}
