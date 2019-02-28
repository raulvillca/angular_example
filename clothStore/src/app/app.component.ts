import { Component } from '@angular/core';
import { ContainerService } from './services/container.service';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clothStore';
  viewContainer = [];

  constructor(private container: ContainerService) {}

  ngOnInit() {
    this.viewContainer = this.container.getViewContainer(HomeComponent);
  }

  changeView(view) {
    if ("home" == view) {
      this.viewContainer = this.container.getViewContainer(HomeComponent);
    } else if ("contact" == view) {
      this.viewContainer = this.container.getViewContainer(ContactComponent);
    }
  }
}
