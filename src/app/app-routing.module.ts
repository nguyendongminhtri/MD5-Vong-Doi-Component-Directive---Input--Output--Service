import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home/home.component";
import {FontSizeComponent} from "./content/font-size/font-size.component";
import {ShowPetComponent} from "./content/show-pet/show-pet.component";
import {TableBostrapComponent} from "./content/table-bostrap/table-bostrap.component";
import {ParentComponent} from "./input/parent/parent.component";
import {ParentOutputComponent} from "./content/output/parent-output/parent-output.component";
import {ParentNgonchangeComponent} from "./content/ngOnChanges/parent-ngonchange/parent-ngonchange.component";
import {ParentNgdocheckComponent} from "./content/ngDoCheck/parent-ngdocheck/parent-ngdocheck.component";
import {NgAfterContentInitComponent} from "./content/ngAfterContentInit/ng-after-content-init/ng-after-content-init.component";
import {NgAfterViewCheckedComponent} from "./content/ ngAfterViewChecked/ng-after-view-checked/ng-after-view-checked.component";
import {ParentNgondestroyComponent} from "./content/ngOnDestroy/parent-ngondestroy/parent-ngondestroy.component";
import {ChildServiceComponent} from "./content/@service/child-service/child-service.component";
import {ParentServiceComponent} from "./content/@service/parent-service/parent-service.component";
import {NgAfterContentCheckedComponent} from "./content/ngAfterContentChecked/ng-after-content-checked/ng-after-content-checked.component";
import {NgAfterViewInitComponent} from "./content/ngAfterViewInit/ng-after-view-init/ng-after-view-init.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'font-size', component: FontSizeComponent},
  {path: 'show-pet', component: ShowPetComponent},
  {path: 'table-boostrap', component: TableBostrapComponent},
  {path: 'input', component: ParentComponent},
  {path: 'output', component: ParentOutputComponent},
  {path: 'ng-onchange',component: ParentNgonchangeComponent},
  {path: 'ng-do-check',component: ParentNgdocheckComponent},
  {path: 'ng-after-content-init', component: NgAfterContentInitComponent},
  {path: 'ngAfterViewChecked', component: NgAfterViewCheckedComponent},
  {path: 'ngOnDestroy', component: ParentNgondestroyComponent},
  {path: 'child-service', component: ChildServiceComponent},
  {path: 'parent-service', component: ParentServiceComponent},
  {path: 'ngAfterContentChecked', component: NgAfterContentCheckedComponent},
  {path: 'ngAfterViewInit', component: NgAfterViewInitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
