import { SharedModule } from './../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from './containers/register/register.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: RegisterComponent
    }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  declarations: [
    RegisterComponent
  ],
  providers: []
})

export class RegisterModule {}