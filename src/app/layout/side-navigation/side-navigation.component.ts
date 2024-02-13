import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgSize } from 'src/app/core/enums/icon.enums';
import { navigation_links} from '../layout.constants';
import {MatDialog} from "@angular/material/dialog";
import {
  KorisnickiRacunDialogComponent
} from "../../features/korisnicki-racun/modals/korisnicki-racun-dialog/korisnicki-racun-dialog.component";
import {StoreService} from "../../core/services/store.service";
import {Korisnik} from "../../core/models/korisnik.model";
import { Router} from "@angular/router";

@Component({
  selector: 'iz-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavigationComponent {
  public trenutniKorisnik$ = this.store.trenutniKorisnik$;
  constructor(private router: Router, private dialog: MatDialog, public store: StoreService) {
  }

  get SvgSize(){
    return SvgSize;
  }

  get NavigationLinks() {
    return navigation_links;
  }

  public openProfileDialog(): void {
    this.dialog.open(KorisnickiRacunDialogComponent);
  }

  public getInitials(korisnik: Korisnik[]) {
    const _korisnik = korisnik[0];
    return _korisnik?.first_name.charAt(0) + _korisnik?.last_name.charAt(0);
  }
}
