import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckOutComponent } from './check-out.component';
import { AuthguardService } from '../shared/authguard.service';


const routes: Routes = [

  { path: '', component: CheckOutComponent, canActivate: [AuthguardService] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckOutRoutingModule { }
