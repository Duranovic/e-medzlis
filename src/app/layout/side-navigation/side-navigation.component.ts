import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SvgSize } from 'src/app/core/enums/icon.enums';
import { navigation_links} from '../layout.constants';
import {MatDialog} from "@angular/material/dialog";
import {
  KorisnickiRacunDialogComponent
} from "../../features/korisnicki-racun/modals/korisnicki-racun-dialog/korisnicki-racun-dialog.component";

@Component({
  selector: 'iz-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavigationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  get SvgSize(){
    return SvgSize;
  }

  get NavigationLinks() {
    return navigation_links;
  }

  public openProfileDialog(): void {
    this.dialog.open(KorisnickiRacunDialogComponent);
  }

  ngOnInit(): void {

  }

}
