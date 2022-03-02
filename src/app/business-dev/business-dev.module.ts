import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessDevRoutingModule } from './business-dev-routing.module';
import { IssuanceSaleComponent } from './issuance-sale/issuance-sale.component';
import { IssuanceVolumeComponent } from './issuance-volume/issuance-volume.component';
import { ProjectComponent } from './project/project.component';
import { ProjectTaskComponent } from './project-task/project-task.component';
import { ProjectMilestoneComponent } from './project-milestone/project-milestone.component';


@NgModule({
  declarations: [
    IssuanceSaleComponent,
    IssuanceVolumeComponent,
    ProjectComponent,
    ProjectTaskComponent,
    ProjectMilestoneComponent
  ],
  imports: [
    CommonModule,
    BusinessDevRoutingModule
  ]
})
export class BusinessDevModule { }
