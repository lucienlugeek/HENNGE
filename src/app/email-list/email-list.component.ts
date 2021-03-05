import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { filter, map, pluck } from 'rxjs/operators';
import { SpawnDateService } from '../services/spawn-date.service';

export interface EMail {
  from: string;
  to: string;
  subject: string;
  date: string;
  content: string;
  attachment?: string;
}

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.scss']
})
export class EmailListComponent {

  /**
   * The total mails' amount.
   */
  total = 0;

  /**
   * Data model.
   */
  data: any[] = [];

  displayedColumns = ['from', 'to', 'subject', 'attachment', 'date'];

  /**
   * Sort info.
   */
  sorts = {
    from: undefined,
    to: undefined,
    subject: undefined,
    date: undefined
  };

  /**
   * Mock moment objects.
   */
  spawnMoments: moment.Moment[];

  /**
   * Preserve query conditions.
   */
  queryConditions: any = {};

  constructor(
    private httpClient: HttpClient,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private spawnDate: SpawnDateService
  ) {
    this.matIconRegistry.addSvgIcon('attachment_hennge',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icon_clip.svg')
    );
    this.matIconRegistry.addSvgIcon('mailsp_hennge',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icon_mail_sp.svg')
    );
    this.matIconRegistry.addSvgIcon('arrow01_hennge',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icon_arrow01.svg')
    );
    this.matIconRegistry.addSvgIcon('arrow02_hennge',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icon_arrow02.svg')
    );
    this.spawnMoments = this.spawnDate.spawn();
  }

  /**
   * Retrieve mails.
   * @param sortBy Sort key.
   * @param order Asc or desc.
   */
  updateEmails(params?: {
    startDate?: moment.Moment,
    endDate?: moment.Moment,
    sortBy?: string,
    order?: boolean
  }): void {
    if (params) {
      this.queryConditions = Object.assign({}, this.queryConditions, params);
    }
    const { startDate, endDate, sortBy, order } = this.queryConditions;
    this.httpClient.get('../assets/mock-email.json')
      .pipe(
        pluck('emails'),
      )
      .subscribe((data: any) => {
        this.data = data.map((em: any, i: number) => {
          em.date = this.spawnMoments[i];
          return em;
        });
        if (startDate && endDate) {
          this.data = this.data.filter(f => f.date.isBetween(startDate, endDate, undefined, '[]'));
        }
        this.total = this.data.length;
        if (sortBy) {
          this.data.sort((a: any, b: any) => {
            const compare = String(a[sortBy].valueOf()).localeCompare(String(b[sortBy].valueOf()));
            return order ? compare : -compare;
          });
        }
      });
  }

  /**
   * Toggle show email content while click email item.
   * @param dt Email item.
   */
  toggleContent(dt: any): void {
    dt.showContent = !dt.showContent;
  }

  /**
   * Sort results when table head clicked.
   * @param sortBy Sort key.
   */
  doSort(sortBy: any): void {
    Object.keys(this.sorts).forEach((key: any) => {
      if (key !== sortBy) {
        this.sorts[key] = undefined;
      }
    });
    this.sorts[sortBy] = !this.sorts[sortBy];
    this.updateEmails({
      sortBy,
      order: this.sorts[sortBy]
    });
  }
}
