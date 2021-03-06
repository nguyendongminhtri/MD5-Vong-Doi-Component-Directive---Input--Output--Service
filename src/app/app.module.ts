import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { NavBarComponent } from './nav-foot/nav-bar/nav-bar.component';
import { FooterComponent } from './nav-foot/footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import {MatCardModule} from "@angular/material/card";
import { FontSizeComponent } from './content/font-size/font-size.component';
import {FormsModule} from "@angular/forms";
import { ShowPetComponent } from './content/show-pet/show-pet.component';
import { TableBostrapComponent } from './content/table-bostrap/table-bostrap.component';
import { ChildComponent } from './input/child/child.component';
import { ParentComponent } from './input/parent/parent.component';
import { ChildOutputComponent } from './content/output/child-output/child-output.component';
import { ParentOutputComponent } from './content/output/parent-output/parent-output.component';
import { ChildNgonchangeComponent } from './content/ngOnChanges/child-ngonchange/child-ngonchange.component';
import { ParentNgonchangeComponent } from './content/ngOnChanges/parent-ngonchange/parent-ngonchange.component';
import { ChildNgdocheckComponent } from './content/ngDoCheck/child-ngdocheck/child-ngdocheck.component';
import { ParentNgdocheckComponent } from './content/ngDoCheck/parent-ngdocheck/parent-ngdocheck.component';
import { NgAfterContentInitComponent } from './content/ngAfterContentInit/ng-after-content-init/ng-after-content-init.component';
import { NgAfterViewCheckedComponent } from './content/ ngAfterViewChecked/ng-after-view-checked/ng-after-view-checked.component';
import { ChildNgondestroyComponent } from './content/ngOnDestroy/child-ngondestroy/child-ngondestroy.component';
import { ParentNgondestroyComponent } from './content/ngOnDestroy/parent-ngondestroy/parent-ngondestroy.component';
import { ChildServiceComponent } from './content/@service/child-service/child-service.component';
import { ParentServiceComponent } from './content/@service/parent-service/parent-service.component';
import { NgAfterContentCheckedComponent } from './content/ngAfterContentChecked/ng-after-content-checked/ng-after-content-checked.component';
import { NgAfterViewInitComponent } from './content/ngAfterViewInit/ng-after-view-init/ng-after-view-init.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    FontSizeComponent,
    ShowPetComponent,
    TableBostrapComponent,
    ChildComponent,
    ParentComponent,
    ChildOutputComponent,
    ParentOutputComponent,
    ChildNgonchangeComponent,
    ParentNgonchangeComponent,
    ChildNgdocheckComponent,
    ParentNgdocheckComponent,
    NgAfterContentInitComponent,
    NgAfterViewCheckedComponent,
    ChildNgondestroyComponent,
    ParentNgondestroyComponent,
    ChildServiceComponent,
    ParentServiceComponent,
    NgAfterContentCheckedComponent,
    NgAfterViewInitComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
