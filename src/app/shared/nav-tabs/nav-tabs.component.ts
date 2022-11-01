import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationTabs } from 'src/app/core/models/navigation-tabs.model';

@Component({
  selector: 'iz-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavTabsComponent implements OnInit {
  @Input() tabs: NavigationTabs[];

  constructor() { }

  public ngOnInit(): void {
  }
}
