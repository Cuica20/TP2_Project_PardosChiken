/**
 * Created by griga on 7/11/16.
 */


import {Routes, RouterModule} from '@angular/router';
import {MainLayoutComponent} from "./shared/layout/app-layouts/main-layout.component";
import {AuthLayoutComponent} from "./shared/layout/app-layouts/auth-layout.component";
import {ModuleWithProviders} from "@angular/core";

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '', redirectTo: 'home', pathMatch: 'full'
            },
            {
                path: 'home',
                loadChildren: 'app/+home/home.module#HomeModule'
            },
            {
                path: 'menu',
                loadChildren: 'app/+menu/menu.module#MenuModule'
            },
            {
                path: 'pedido',
                loadChildren: 'app/+pedidos/pedido.module#PedidoModule'
            },
            {
                path: 'reserva',
                loadChildren: 'app/+reserva/reserva.module#ReservaModule'
            },
            {
                path: 'reservaConsulta',
                loadChildren: 'app/+reserva-consulta/reserva.consulta.module#ReservaConsultaModule'
            }
        ]
    },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
