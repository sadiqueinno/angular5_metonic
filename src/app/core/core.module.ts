import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { AsideNavComponent } from './aside-nav/aside-nav.component';
import { FooterComponent } from './footer/footer.component';
import { QuickSidebarComponent } from './quick-sidebar/quick-sidebar.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { TooltipsComponent } from './tooltips/tooltips.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderNavComponent,
    AsideNavComponent,
    FooterComponent,
    QuickSidebarComponent,
    ScrollTopComponent,
    TooltipsComponent
  ],
  exports: [
    HeaderNavComponent,
    AsideNavComponent,
    FooterComponent,
    QuickSidebarComponent,
    ScrollTopComponent,
    TooltipsComponent
  ]
})
export class CoreModule { }
