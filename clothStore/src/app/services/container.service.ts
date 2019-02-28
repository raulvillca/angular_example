import { Injectable, Type } from '@angular/core';
import { ViewItem } from '../components/container/view.component';

@Injectable()
export class ContainerService {

  getViewContainer (component: Type<any>) {
    return [
      new ViewItem(component)
    ];
  }
}
