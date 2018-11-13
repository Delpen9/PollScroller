import { Component, HostListener } from '@angular/core';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public opened: boolean = false;
  public hamburgerNotHidden: boolean = true;
  public panAllowed: boolean = true;

  constructor(config: NgbTabsetConfig) {
    config.justify = 'center';
    config.type = 'pills';
  }

  ngOnInit() {
    this.onResize();
  }

  public toggleSidebar() {
    this.opened = !this.opened;
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth < 1000){
      this.hamburgerNotHidden = false;
    }
    else if (window.innerWidth >= 1000){
      this.hamburgerNotHidden = true;
    }
  }

  disablePanLeftRight(): void {
    this.panAllowed = false;
  }
}
