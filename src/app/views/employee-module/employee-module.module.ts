import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegistrationComponent } from "./registration/registration.component";

@NgModule({
  declarations: [RegistrationComponent, EmployeeViewComponent],
  imports: [CommonModule]
})
export class EmployeeModuleModule {}
