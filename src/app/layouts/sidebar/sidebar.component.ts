import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import MetisMenu from 'metismenujs/dist/metismenujs';
import { AuthenticationService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit, OnChanges {

  permission:any={};

  @Input() isCondensed = false;

  menu: any;

  @ViewChild('sideMenu', { static: false }) sideMenu: ElementRef;

  constructor(private router: Router, private authService: AuthenticationService) { 
    this.permission['static']={insert:false,edit:false,update:false,delete:true};
    // الإعدادات
    this.permission['generalsetting']={insert:false,edit:false,update:false,delete:true};
    this.permission['projects']={insert:false,edit:false,update:false,delete:true};
    this.permission['users']={insert:false,edit:false,update:false,delete:true};
    this.permission['banks']={insert:false,edit:false,update:false,delete:true};
    // الادارة
    this.permission['administrativeboard']={insert:false,edit:false,update:false,delete:true};
    this.permission['generalauthority']={insert:false,edit:false,update:false,delete:true};
    this.permission['joinrequest']={insert:false,edit:false,update:false,delete:true};
    this.permission['employees']={insert:false,edit:false,update:false,delete:true};
    this.permission['officialbooks']={insert:false,edit:false,update:false,delete:true};
    this.permission['meetings']={insert:false,edit:false,update:false,delete:true};
    this.permission['incomingbooks']={insert:false,edit:false,update:false,delete:true};
    this.permission['officialvisits']={insert:false,edit:false,update:false,delete:true};
    this.permission['fixedassets']={insert:false,edit:false,update:false,delete:true};
    this.permission['tabsandstatement']={insert:false,edit:false,update:false,delete:true};
    
    //المبيعات 
    this.permission['map']={insert:false,edit:false,update:false,delete:true};
    this.permission['contracts']={insert:false,edit:false,update:false,delete:true};
    this.permission['reservation']={insert:false,edit:false,update:false,delete:true};
    this.permission['installments']={insert:false,edit:false,update:false,delete:true};

    //الحسابات
    this.permission['receiptreceived']={insert:false,edit:false,update:false,delete:true};
    this.permission['exchangedocument']={insert:false,edit:false,update:false,delete:true};
    this.permission['entrydocument']={insert:false,edit:false,update:false,delete:true};
    this.permission['creditor']={insert:false,edit:false,update:false,delete:true};
    this.permission['debit']={insert:false,edit:false,update:false,delete:true};
    this.permission['bankaccounts']={insert:false,edit:false,update:false,delete:true};
    this.permission['treasury']={insert:false,edit:false,update:false,delete:true};

    //التقارير 
    this.permission['reports']={insert:false,edit:false,update:false,delete:true};



  }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/account/login']);
  }
  ngAfterViewInit() {
    this.menu = new MetisMenu(this.sideMenu.nativeElement);

    this._activateMenuDropdown();
  }

  ngOnChanges() {
    if (!this.isCondensed && this.sideMenu || this.isCondensed) {
      setTimeout(() => {
        this.menu = new MetisMenu(this.sideMenu.nativeElement);
      });
    } else if (this.menu) {
      this.menu.dispose();
    }
  }

  /**
   * small sidebar
   */
  smallSidebar() {
    document.body.classList.add('left-side-menu-sm');
    document.body.classList.remove('left-side-menu-dark');
    document.body.classList.remove('topbar-light');
    document.body.classList.remove('boxed-layout');
    document.body.classList.remove('enlarged');
  }

  /**
   * Dark sidebar
   */
  darkSidebar() {
    document.body.classList.remove('left-side-menu-sm');
    document.body.classList.add('left-side-menu-dark');
    document.body.classList.remove('topbar-light');
    document.body.classList.remove('boxed-layout');
  }

  /**
   * Light Topbar
   */
  lightTopbar() {
    document.body.classList.add('topbar-light');
    document.body.classList.remove('left-side-menu-dark');
    document.body.classList.remove('left-side-menu-sm');
    document.body.classList.remove('boxed-layout');

  }

  /**
   * Sidebar collapsed
   */
  sidebarCollapsed() {
    document.body.classList.remove('left-side-menu-dark');
    document.body.classList.remove('left-side-menu-sm');
    document.body.classList.toggle('enlarged');
    document.body.classList.remove('boxed-layout');
    document.body.classList.remove('topbar-light');
  }

  /**
   * Boxed Layout
   */
  boxedLayout() {
    document.body.classList.add('boxed-layout');
    document.body.classList.remove('left-side-menu-dark');
    document.body.classList.add('enlarged');
    document.body.classList.remove('left-side-menu-sm');
  }

  /**
   * Activates the menu dropdown
   */
  _activateMenuDropdown() {
    const links = document.getElementsByClassName('side-nav-link-ref');
    let menuItemEl = null;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < links.length; i++) {
      // tslint:disable-next-line: no-string-literal
      if (window.location.pathname === links[i]['pathname']) {
        menuItemEl = links[i];
        break;
      }
    }

    if (menuItemEl) {
      menuItemEl.classList.add('active');

      const parentEl = menuItemEl.parentElement;
      if (parentEl) {
        parentEl.classList.add('active');

        const parent2El = parentEl.parentElement;
        if (parent2El) {
          parent2El.classList.add('in');
        }

        const parent3El = parent2El.parentElement;
        if (parent3El) {
          parent3El.classList.add('active');
          parent3El.firstChild.classList.add('active');
        }
      }
    }
  }

}
