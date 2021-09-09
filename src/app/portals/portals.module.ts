import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalsRoutingModule } from './portals-routing.module';
import { HomeComponent } from './home/home.component';
import { NgbDropdownModule, NgbTabsetModule, NgbAccordionModule, NgbCollapseModule, NgbModalModule, NgbProgressbarModule, NgbAlertModule, NgbToastModule, NgbPopoverModule, NgbTooltipModule, NgbPaginationModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsComponent } from './projects/projects.component';
import { UIModule } from 'src/app/shared/ui/ui.module';
import { UiSwitchModule } from 'ngx-ui-switch';
import { ImageCropperModule } from 'ngx-image-cropper';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './users/users.component';
import { BanksComponent } from './banks/banks.component';
import { AdministrativeBoardComponent } from './administrative-board/administrative-board.component';
import { GeneralAuthorityComponent } from './general-authority/general-authority.component';
import { JoinRequestComponent } from './join-request/join-request.component';
import { EmployeesComponent } from './employees/employees.component';
import { OfficialBooksComponent } from './official-books/official-books.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { IncomingBooksComponent } from './incoming-books/incoming-books.component';
import { OfficialVisitsComponent } from './official-visits/official-visits.component';
import { FixedAssetsComponent } from './fixed-assets/fixed-assets.component';
import { MapComponent } from './map/map.component';
import { ContractsComponent } from './contracts/contracts.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ReceiptReceivedComponent } from './receipt-received/receipt-received.component';
import { ExchangeDocumentComponent } from './exchange-document/exchange-document.component';
import { EntryDocumentComponent } from './entry-document/entry-document.component';
import { CreditorComponent } from './creditor/creditor.component';
import { DebitComponent } from './debit/debit.component';
import { BankAccountsComponent } from './bank-accounts/bank-accounts.component';
import { TreasuryComponent } from './treasury/treasury.component';
import { ReportsComponent } from './reports/reports.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxChartistModule } from 'ngx-chartist';
import { ChartsModule } from 'ng2-charts';
import { PorfileComponent } from './porfile/porfile.component';
import { InstallmentsComponent } from './installments/installments.component';
import { TabAndStatementComponent } from './tab-and-statement/tab-and-statement.component';
import { ReceivablereportsComponent } from './receivablereports/receivablereports.component';
import { LateReportsComponent } from './late-reports/late-reports.component';
import { SpecialExpenseReportsComponent } from './special-expense-reports/special-expense-reports.component';
import { SalesReportsComponent } from './sales-reports/sales-reports.component';
@NgModule({
  declarations: [HomeComponent, ProjectsComponent, SettingsComponent, UsersComponent, BanksComponent, AdministrativeBoardComponent, GeneralAuthorityComponent, JoinRequestComponent, EmployeesComponent, OfficialBooksComponent, MeetingsComponent, IncomingBooksComponent, OfficialVisitsComponent, FixedAssetsComponent, MapComponent, ContractsComponent, ReservationComponent, ReceiptReceivedComponent, ExchangeDocumentComponent, EntryDocumentComponent, CreditorComponent, DebitComponent, BankAccountsComponent, TreasuryComponent, ReportsComponent, PorfileComponent, InstallmentsComponent, TabAndStatementComponent, ReceivablereportsComponent, LateReportsComponent, SpecialExpenseReportsComponent, SalesReportsComponent],
  imports: [
    CommonModule,
    PortalsRoutingModule,
    NgbDropdownModule,
    NgbTabsetModule,
    NgbAccordionModule,
    NgbCollapseModule,
    NgbModalModule,
    NgbProgressbarModule,
    NgbAlertModule,
    NgbToastModule,
    NgbPopoverModule,
    NgbTooltipModule,
    NgbPaginationModule,
    NgbCarouselModule ,
    UIModule,
    UiSwitchModule,
    ImageCropperModule,
    NgApexchartsModule,
    NgxChartistModule,
    ChartsModule
  ]
})
export class PortalsModule { }
