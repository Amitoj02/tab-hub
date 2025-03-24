import { Component } from '@angular/core';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatFormField, MatInput, MatLabel, MatSuffix} from '@angular/material/input';
import {AccountToken} from '../../../interfaces/token';
import {FormsModule} from '@angular/forms';
import {FineGrainedAccessTokenLink} from '../../../constants/links';

@Component({
  selector: 'account-settings',
    imports: [
        MatButton,
        MatIcon,
        MatFormField,
        MatLabel,
        MatInput,
        MatSuffix,
        MatIconButton,
        FormsModule
    ],
  templateUrl: './account-settings.component.html',
  styleUrl: './account-settings.component.scss'
})
export class AccountSettingsComponent {
    newForm: AccountToken = {
        nickname: '',
        token: ''
    }
    protected readonly FineGrainedAccessTokenLink = FineGrainedAccessTokenLink;
}
