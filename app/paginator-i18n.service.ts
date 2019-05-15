import { Injectable, OnDestroy } from '@angular/core';
import {MatPaginatorIntl} from '@angular/material';

import {Subscription, of} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PaginatorI18n extends MatPaginatorIntl implements OnDestroy {
  sub: Subscription;
  constructor() {
    super();
    this.getPaginatorIntl();
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  getPaginatorIntl() {
    this.sub = of({
      'paginator.itemsPerPageLabel': 'things per page',
      'paginator.firstPageLabel': 'one page',
      'paginator.previousPageLabel': 'prev page',
      'paginator.nextPageLabel': 'next page',
      'paginator.lastPageLabel': 'last page',
    })
      .subscribe((translation) => {
        this.itemsPerPageLabel = translation['paginator.itemsPerPageLabel'];
        this.firstPageLabel = translation['paginator.firstPageLabel'];
        this.previousPageLabel = translation['paginator.previousPageLabel'];
        this.nextPageLabel = translation['paginator.nextPageLabel'];
        this.lastPageLabel = translation['paginator.lastPageLabel'];
        this.changes.next();
      });
  }
}
