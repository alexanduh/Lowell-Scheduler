import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectTeachersPage } from './select-teachers';

@NgModule({
  declarations: [
    SelectTeachersPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectTeachersPage),
  ],
})
export class SelectTeachersPageModule {}
