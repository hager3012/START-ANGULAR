import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  isScrolled = false;

  @HostListener("window:scroll")
  scrollEvent() {
      window.pageYOffset >= 80 ? (this.isScrolled = true) : (this.isScrolled = false);
  }
}
