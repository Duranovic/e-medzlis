import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SvgSize } from 'src/app/core/enums/icon.enums';
import { navigation_links } from '../layout.constants';

@Component({
  selector: 'iz-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavigationComponent implements OnInit {

  constructor() { }

  get SvgSize(){
    return SvgSize;
  }

  get NavigationLinks() {
    return navigation_links;
  }

  ngOnInit(): void {
    
  }

}
