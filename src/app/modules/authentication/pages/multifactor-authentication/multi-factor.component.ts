import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ProgressBarMode} from "@angular/material/progress-bar";
import {ThemePalette} from "@angular/material/core";
import {UserLoginResponse} from "@app/modules/authentication/interfaces/authentication.interface";
import {StorageService} from "@app/core/services/storage/storage.service";
import {CodeInputComponent} from "angular-code-input";
import {
  DataMultiFactorAuthenticationResponse,
  MultiFactorAuthenticationRequest
} from "@app/modules/authentication/interfaces/multifactor-authentication.interface";
import {AuthenticationService} from "@app/modules/authentication/services/authentication.service";
import {LoadingService} from "@app/core/services/loading/loading.service";
import {AlertService} from "@app/core/services/alert/alert.service";

@Component({
  selector: 'app-multifactor-authentication',
  templateUrl: './multi-factor.component.html',
  styleUrls: ['./multi-factor.component.scss']
})
export class MultiFactorComponent implements OnInit {

  @ViewChild('codeInput') codeInput!: CodeInputComponent;

  user!: any;
  codeValid: boolean = false;
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value: number = 100;
  interval: any;
  setTimeout: any;

  mfaEmail!: boolean;
  email: string = '';
  private code: string = '';

  constructor(
    private dialog: MatDialog,
    private storage: StorageService,
    private auth: AuthenticationService,
    private loader: LoadingService,
    private alert: AlertService) {
  }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.value -= 0.333;
    }, 1000);

    this.user = this.storage.getItem<UserLoginResponse>('user_login');
    this.email = this.user.email;

    this.setTimeout = setTimeout(() => {
      this.dialog.closeAll();
      this.alert.error('¡Tiempo expirado!. Vuelva a autenticarse.');
      this.storage.removeItem('user_login');
    }, 300000);
  }


  onCodeCompleted(codeCompleted: string) {
    this.code = codeCompleted;
    this.codeValid = true;
  }


  public sendCode(): void {
    this.loader.show();
    this.codeInput.reset();
    this.codeInput.focusOnField(0);
    const data: MultiFactorAuthenticationRequest = {
      user_id: this.user?.user_id,
      user_code: this.code
    }

    this.auth.sendMfa(data).subscribe({
      next: (data: DataMultiFactorAuthenticationResponse) => {
        console.log(data)
        this.destroyModal();
        this.auth.signedInSuccessfully(data);
      }, error: () => {
        this.codeValid = false;
      }
    });
    this.loader.hide();
  }

  resendCode(): void {
  }

  destroyModal(): void {
    this.dialog.closeAll();
    clearInterval(this.interval);
    clearTimeout(this.setTimeout);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    clearTimeout(this.setTimeout);
  }

}
