import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment';
import { EmailListComponent } from './email-list/email-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild(EmailListComponent)
  emailComp: EmailListComponent;

  title = 'HENNGE';

  /**
   * Start date.
   */
  dateStart = new FormControl(moment().subtract(6, 'days'));
  /**
   * End date.
   */
  dateEnd = new FormControl(moment());

  /**
   * Mobile or larger device.
   */
  isMobile: boolean;

  maxDate = moment();

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.matIconRegistry.addSvgIcon('calender_hennge',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icon_calender.svg')
    );
    this.matIconRegistry.addSvgIcon('search_hennge',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icon_search.svg')
    );
  }

  ngOnInit(): void {
    this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  }

  ngAfterViewInit(): void {
    this.doSearch();
  }

  /**
   * Execute query once button clicked.
   */
  doSearch(): void {
    this.emailComp.updateEmails({
      startDate: this.dateStart.value && this.dateStart.value.hour(0).minute(0).second(0),
      endDate: this.dateEnd.value && this.dateEnd.value.hour(23).minute(59).second(59)
    });
  }
}
