import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'iz-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
  @Input() source: any[];

  constructor(private router: Router) { 
    console.log(this.router.getCurrentNavigation()?.previousNavigation);
  }

  ngOnInit(): void {
  }

  click(index: any){
    this.router.navigateByUrl(`/dzemati/${index}`);
  }
}
