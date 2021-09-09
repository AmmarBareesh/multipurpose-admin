import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbCollapseModule,NgbProgressbarModule, NgbDatepickerModule, NgbTimepickerModule, NgbDropdownModule,NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideModule } from 'ng-click-outside';

import { SlimscrollDirective } from './slimscroll.directive';
import { CountToDirective } from './count-to.directive';

import { PreloaderComponent } from './preloader/preloader.component';
import { PagetitleComponent } from './pagetitle/pagetitle.component';
import { PortletComponent } from './portlet/portlet.component';
import { EmaillistComponent } from './emaillist/emaillist.component';
import { WidgetComponent } from './widget/widget.component';
import { TabelComponent } from './tabel/tabel.component';
import { KeyComponent } from './key/key.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { NgxFileDropModule } from 'ngx-file-drop';
import { CodeComponent } from './code/code.component';
import { NgxEditorModule } from 'ngx-editor';
import { KeditorComponent } from './keditor/keditor.component';
import { MenuComponent } from './menu/menu.component';
import { ViewComponent } from './view/view.component';
import { UiSwitchModule } from 'ngx-ui-switch';
import { TellComponent } from './tell/tell.component';
import { MapsProjectComponent } from './maps-project/maps-project.component';
import { KformComponent } from './kform/kform.component';
import { ViewFormComponent } from './view-form/view-form.component';
import { IdCardComponent } from './id-card/id-card.component';
@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [SlimscrollDirective, PreloaderComponent, PagetitleComponent, PortletComponent, WidgetComponent, EmaillistComponent, CountToDirective, TabelComponent, KeyComponent, FileManagerComponent, CodeComponent, KeditorComponent, MenuComponent, ViewComponent, TellComponent, MapsProjectComponent, KformComponent, ViewFormComponent, IdCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ClickOutsideModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbDropdownModule,
    NgbTooltipModule,
    FileUploadModule,
    NgxFileDropModule,
    NgbProgressbarModule,
    NgxEditorModule,
    UiSwitchModule
  ],
  // tslint:disable-next-line: max-line-length
  exports: [SlimscrollDirective, PreloaderComponent, PagetitleComponent, PortletComponent, WidgetComponent, EmaillistComponent, CountToDirective,TabelComponent,KeyComponent,FileManagerComponent,CodeComponent,KeditorComponent,MenuComponent,ViewComponent,TellComponent,MapsProjectComponent,KformComponent,ViewFormComponent,IdCardComponent]
})
export class UIModule { }
