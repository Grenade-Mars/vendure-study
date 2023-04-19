import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseListComponent, DataService } from '@vendure/admin-ui/core';

import { GetAllReviews, SortOrder } from '../../plugins/reviews/ui/generated-types';

import { GET_ALL_REVIEWS } from './qw-app.graphql';

@Component({
    selector: 'kb-all-product-reviews-list',
    templateUrl: './qw-app.component.html',
    styleUrls: ['./qw-app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllProductReviewsListComponent extends BaseListComponent<
    GetAllReviews.Query,
    GetAllReviews.Items,
    GetAllReviews.Variables
> {
    filteredState: string | null = 'new';

    constructor(private dataService: DataService, router: Router, route: ActivatedRoute) {
        super(router, route);
        super.setQueryFn(
            (...args: any[]) => {
                return this.dataService.query<GetAllReviews.Query>(GET_ALL_REVIEWS, args);
            },
            data => data.productReviews,
            (skip, take) => {
                return {
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    productId: route.snapshot.paramMap.get('id')!,
                    options: {
                        skip,
                        take,
                        sort: {
                            createdAt: SortOrder.DESC,
                        },
                        ...(this.filteredState != null
                            ? {
                                  filter: {
                                      state: {
                                          eq: this.filteredState,
                                      },
                                  },
                              }
                            : {}),
                    },
                };
            },
        );
    }
}
