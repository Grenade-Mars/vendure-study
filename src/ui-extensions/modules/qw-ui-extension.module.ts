// import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { hostExternalFrame } from '@vendure/admin-ui/core';

// /**
//  * This module does 1 thing: it declares an external frame to be used at this route,
//  * with the url of that frame set to the Vue app which will be copied over to the
//  * assets dir, since it is defined in the `staticAssets` array of the AdminUiExtension.
//  */
// @NgModule({
//     imports: [
//         RouterModule.forChild([
//             hostExternalFrame({
//                 path: '',
//                 breadcrumbLabel: 'Qw App',
//                 extensionUrl: './assets/vue-app/index.html',
//                 openInNewTab: false,
//             }),
//         ]),
//     ],
// })
// export class QwUiExtensionModule {}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@vendure/admin-ui/core';
import { QwComponent } from './qw-main.component';
import { QwDetailComponent } from './qw-detail-main.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                component: QwComponent,
                data: { breadcrumb: 'Qw' },
            },
            {
                path: 'id',
                component: QwDetailComponent,
                data: { breadcrumb: [
                    {
                        label: 'Qw',
                        link: ['/extensions', 'qw-ui'],
                    },
                    {
                        label: 'id',
                        link: ['']
                    },
                ]}
            }
        ]),
    ],
    declarations: [QwComponent, QwDetailComponent],
})
export class QwUiExtensionModule {}
