import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy, ComponentFactoryResolver, ChangeDetectorRef, ViewContainerRef } from '@angular/core';
import { Type } from '@angular/core';
import { ContainerDirective } from '../../directives/container.directive';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements AfterViewInit, OnDestroy {

  @ViewChild("appContainer", {read: ViewContainerRef}) entry: ViewContainerRef;

  componentRef: any;

  constructor(private component: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    
  }

  ngOnDestroy() {

  }


  createComponent(component) {
    this.entry.clear();

    console.log("home" == component, component);
    if ("home" == component) {
      this.componentRef = this.component.resolveComponentFactory(HomeComponent);
    } else if ("contact" == component) {
      this.componentRef = this.component.resolveComponentFactory(ContactComponent);
    }
    this.entry.createComponent(this.componentRef);
  }

  destroyComponent() {
    this.componentRef.destroy();
  }
}
