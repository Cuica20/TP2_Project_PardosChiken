/**
 * Created by javier on 6/13/17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {reservaRouting} from "./reserva.routing";
import {ReservaComponent} from "./reserva.component";

@NgModule({
    imports: [
        CommonModule,
        reservaRouting
    ],
    declarations: [ReservaComponent]
})
export class ReservaModule { }
