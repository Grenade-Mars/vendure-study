import { Component } from '@angular/core';

@Component({
    selector: 'greeter',
    // template: `<h1>{{ greeting }}</h1>`,
    templateUrl: './qw.component.html',
    styleUrls: ['./qw.component.scss'],
})
export class QwComponent {
    greeting = 'Hello!';
    productReviews = {
        items: [
            {
                id: '4',
                createdAt: '2023-04-14T10:20:21.000Z',
                updatedAt: '2023-04-14T10:20:21.000Z',
                authorName: 'Joe Smith',
                authorLocation: 'London',
                summary: 'Good tablet',
                body: 'The screen is clear, bright and sharp!',
                rating: 5,
                state: 'new',
                upvotes: 0,
                downvotes: 0,
                response: null,
                responseCreatedAt: null,
                __typename: 'ProductReview',
                product: {
                    id: '2',
                    name: 'Tablet',
                    featuredAsset: {
                        id: '2',
                        preview:
                            'http://localhost:3000/assets/preview\\b8\\kelly-sikkema-685291-unsplash__preview.jpg',
                        __typename: 'Asset',
                    },
                    __typename: 'Product',
                },
            },
            {
                id: '3',
                createdAt: '2023-04-14T10:18:36.000Z',
                updatedAt: '2023-04-14T10:18:36.000Z',
                authorName: 'Joe Smith',
                authorLocation: 'London',
                summary: 'Good tablet',
                body: 'The screen is clear, bright and sharp!',
                rating: 5,
                state: 'new',
                upvotes: 0,
                downvotes: 0,
                response: null,
                responseCreatedAt: null,
                __typename: 'ProductReview',
                product: {
                    id: '2',
                    name: 'Tablet',
                    featuredAsset: {
                        id: '2',
                        preview:
                            'http://localhost:3000/assets/preview\\b8\\kelly-sikkema-685291-unsplash__preview.jpg',
                        __typename: 'Asset',
                    },
                    __typename: 'Product',
                },
            },
            {
                id: '2',
                createdAt: '2023-04-14T10:18:34.000Z',
                updatedAt: '2023-04-14T10:18:34.000Z',
                authorName: 'Joe Smith',
                authorLocation: 'London',
                summary: 'Good tablet',
                body: 'The screen is clear, bright and sharp!',
                rating: 5,
                state: 'new',
                upvotes: 0,
                downvotes: 0,
                response: null,
                responseCreatedAt: null,
                __typename: 'ProductReview',
                product: {
                    id: '2',
                    name: 'Tablet',
                    featuredAsset: {
                        id: '2',
                        preview:
                            'http://localhost:3000/assets/preview\\b8\\kelly-sikkema-685291-unsplash__preview.jpg',
                        __typename: 'Asset',
                    },
                    __typename: 'Product',
                },
            },
            {
                id: '1',
                createdAt: '2023-04-13T09:53:41.000Z',
                updatedAt: '2023-04-13T09:53:41.000Z',
                authorName: 'Randall M',
                authorLocation: 'Vienna',
                summary: 'A great laptop!',
                body: 'The laptop looks great an performance is flawless.',
                rating: 5,
                state: 'new',
                upvotes: 0,
                downvotes: 0,
                response: null,
                responseCreatedAt: null,
                __typename: 'ProductReview',
                product: {
                    id: '1',
                    name: 'Laptop',
                    featuredAsset: {
                        id: '1',
                        preview:
                            'http://localhost:3000/assets/preview\\71\\derick-david-409858-unsplash__preview.jpg',
                        __typename: 'Asset',
                    },
                    __typename: 'Product',
                },
            },
        ],
        totalItems: 4,
        __typename: 'ProductReviewList',
    };
}
