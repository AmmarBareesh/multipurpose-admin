import { TabAndStatementComponent } from './tab-and-statement/tab-and-statement.component';
import { InstallmentsComponent } from './installments/installments.component';
import { ReportsComponent } from './reports/reports.component';
import { DebitComponent } from './debit/debit.component';
import { TreasuryComponent } from './treasury/treasury.component';
import { BankAccountsComponent } from './bank-accounts/bank-accounts.component';
import { CreditorComponent } from './creditor/creditor.component';
import { EntryDocumentComponent } from './entry-document/entry-document.component';
import { ExchangeDocumentComponent } from './exchange-document/exchange-document.component';
import { ReceiptReceivedComponent } from './receipt-received/receipt-received.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ContractsComponent } from './contracts/contracts.component';
import { MapComponent } from './map/map.component';
import { FixedAssetsComponent } from './fixed-assets/fixed-assets.component';
import { OfficialVisitsComponent } from './official-visits/official-visits.component';
import { IncomingBooksComponent } from './incoming-books/incoming-books.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { OfficialBooksComponent } from './official-books/official-books.component';
import { EmployeesComponent } from './employees/employees.component';
import { JoinRequestComponent } from './join-request/join-request.component';
import { GeneralAuthorityComponent } from './general-authority/general-authority.component';
import { AdministrativeBoardComponent } from './administrative-board/administrative-board.component';
import { SettingsComponent } from './settings/settings.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { UsersComponent } from './users/users.component';
import { BanksComponent } from './banks/banks.component';
import { PorfileComponent } from './porfile/porfile.component';
import { SpecialExpenseReportsComponent } from './special-expense-reports/special-expense-reports.component';
import { SalesReportsComponent } from './sales-reports/sales-reports.component';
import { ReceivablereportsComponent } from './receivablereports/receivablereports.component';
import { LateReportsComponent } from './late-reports/late-reports.component';

const routes: Routes = [
  {       
    path: '',
    component: HomeComponent
 },

  {       
     path: 'home',
     component: HomeComponent
  },
  {       
    path: 'static',
    component: HomeComponent
 },
  {       
    path: 'Settings',
    component: SettingsComponent
  },
  {       
    path: 'Projects',
    component: ProjectsComponent
 },
 {       
  path: 'Users',
  component: UsersComponent
},
{       
  path: 'Banks',
  component: BanksComponent
},

// الادارة

{       
  path: 'Administrative_board',
  component: AdministrativeBoardComponent
},

{       
  path: 'General_authority',
  component: GeneralAuthorityComponent
},

{       
  path: 'Join_request',
  component: JoinRequestComponent
},

{       
  path: 'Employees',
  component: EmployeesComponent
},

{       
  path: 'Official_books',
  component: OfficialBooksComponent
},

{       
  path: 'Meetings',
  component: MeetingsComponent
},

{       
  path: 'Incoming_books',
  component: IncomingBooksComponent
},

{       
  path: 'Official_visits',
  component: OfficialVisitsComponent
},

{       
  path: 'Fixed_assets',
  component: FixedAssetsComponent
},

{       
  path: 'tabsandstatement',
  component: TabAndStatementComponent
},

// المبيعات
{       
  path: 'Map',
  component: MapComponent
},

{       
  path: 'Contracts',
  component: ContractsComponent
},

{       
  path: 'Contractss/:id',
  component: InstallmentsComponent
},

{       
  path: 'Reservation',
  component: ReservationComponent
},

// الحسابات
{       
  path: 'Receipt_received',
  component: ReceiptReceivedComponent
},

{       
  path: 'Exchange_document',
  component: ExchangeDocumentComponent
},

{       
  path: 'Entry_document',
  component: EntryDocumentComponent
},

{       
  path: 'Creditor',
  component: CreditorComponent
},

{       
  path: 'Debit',
  component: DebitComponent
},

{       
  path: 'Bank_accounts',
  component: BankAccountsComponent
},

{       
  path: 'Treasury',
  component: TreasuryComponent
},

// التقارير

{       
  path: 'Reports',
  component: ReportsComponent
},
{       
  path: 'Profile',
  component: PorfileComponent
},

{       
  path: 'SpecialExpense',
  component: SpecialExpenseReportsComponent
},

{       
  path: 'SalesReports',
  component: SalesReportsComponent
},

{       
  path: 'Receivablereports',
  component: ReceivablereportsComponent
},

{       
  path: 'LateReports',
  component: LateReportsComponent
},

{       
  path: '**',
  component: HomeComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalsRoutingModule { }
