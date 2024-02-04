import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StoreService} from "../../../../../core/services/store.service";
import {SaveCancelBarService} from "../../../../../core/services/save-cancel-bar.service";
import {Clanarina} from "../../../../../core/models/clanarina.model";
import { InputType } from 'src/app/core/enums/input.enums';
import * as _ from "lodash";
import {Subscription, tap} from "rxjs";
import {sortBy} from "lodash";
import {sort} from "d3";
import {DataTableColumn, DataTableRowActions, DataTableType} from "../../../../../core/models/tableConfig.model";
import {map} from "rxjs/operators";

@Component({
  selector: 'iz-clanarine',
  templateUrl: './clanarine.component.html',
  styleUrls: ['./clanarine.component.scss']
})
export class ClanarineComponent implements OnInit {
  public currentYear = new Date().getFullYear();
  public nextYearClanarina: Clanarina;
  public initialForm: FormGroup;
  public form: FormGroup;
  private subscription: Subscription;

  clanarinaTableSource: DataTableType;
  constructor(public store: StoreService, private saveCancelBarService: SaveCancelBarService, private formBuilder: FormBuilder) { }

  public sortClanarine(a: Clanarina, b: Clanarina) {
    return a.godina - b.godina;
  }

  get InputType() {
    return InputType;
  }

  get labelForSubscription(): string {
    const currentYear = new Date().getFullYear();
    return `Unesite iznos članarine za ${currentYear + 1}. godinu.`
  }

  ngOnInit(): void {
    this.clanarinaTableSource = {
      columns: [
        {
          title: "Godina",
          dataProperty: "godina",
          sortable: true,
        },
        {
          title: "Iznos",
          dataProperty: "iznos",
          sortable: false,
        },
      ],
      source: this.store.clanarine$.pipe(
        map(clanarina =>
          clanarina.sort(this.sortClanarine).reverse()
        )
      ),
    }

    this.store.clanarine$.subscribe
      ((clanarine: Clanarina[]) => {
        this.nextYearClanarina = clanarine.find(clanarina=>clanarina.godina === this.currentYear + 1)!;
        this.form = this.formBuilder.group(
          {
            id: [this.nextYearClanarina?.id],
            iznos: [this.nextYearClanarina?.iznos ?? null, Validators.required],
            godina: [this.currentYear + 1, Validators.required],
          }
        )
        this.initialForm = _.cloneDeep(this.form);
        this.subscription = this.form.valueChanges.subscribe(() => {
          this.saveCancelBarService.formChanged(this.initialForm, this.form, this.store.updateClanarina.bind(this.store));
        });
      })
  }
}
