import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormStatus } from 'src/app/core/enums/form.enums';
import { InputType } from 'src/app/core/enums/input.enums';
import { LoginService } from 'src/app/core/services/login.service';
import { formControlNames, formLabels } from '../../constants/form.constants';
import {StoreService} from "../../../../core/services/store.service";
import {SnackbarService} from "../../../../core/services/snackbar.service";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public formStatus = FormStatus;
  public inputType = InputType;
  public formControlNames = formControlNames;
  public formLabels = formLabels;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private store: StoreService, private router: Router, private snackbar: SnackbarService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      [this.formControlNames.username]: new FormControl('', Validators.required),
      [this.formControlNames.password]: new FormControl('', Validators.required),
      [this.formControlNames.remember_me]: new FormControl(false),
    })
  }

  public logIn(): void{
    const username: string = this.form?.get('username')?.value;
    const password: string = this.form?.get('password')?.value;
    this.store.login(username, password).subscribe(korisnik=>{
      if(korisnik.length > 0) {
        localStorage.setItem('iz-user', username);
        this.router.navigate(['/pocetna']);
        this.loginService.setUserLoggedIn();
      } else {
        this.snackbar.openSnackbarError('Neuspješna prijava na sistem.', `Provjerite da li ste unijeli ispravne podatke.`)
      }
    })
  }
}
