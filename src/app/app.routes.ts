import { Routes } from '@angular/router';

export const routes: Routes = [

    {
      path: 'searchPackage',  children: [
        {
          path: 'byTicket',
          loadComponent: () =>
            import('./components/search/search.component').then(
              (m) => m.SearchComponent
            ),
        },  
        {
          path: 'statusByTicket',
          loadComponent: () =>
            import('./components/delivery-info/delivery-info.component').then(
              (m) => m.DeliveryInfoComponent
            ),
        },  
      ]
    },
    { path: '**', pathMatch: 'full' ,  redirectTo: '/searchPackage/byTicket' },    
];
