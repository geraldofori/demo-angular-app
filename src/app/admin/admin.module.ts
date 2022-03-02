import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AccountModuleComponent } from './account-module/account-module.component';
import { ApiConsumerComponent } from './api-consumer/api-consumer.component';
import { AuditTrailComponent } from './audit-trail/audit-trail.component';
import { ModuleComponent } from './module/module.component';
import { RoleGroupComponent } from './role-group/role-group.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AccountModuleComponent,
    ApiConsumerComponent,
    AuditTrailComponent,
    ModuleComponent,
    RoleGroupComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
