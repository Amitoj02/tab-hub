import { Component } from '@angular/core';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatFormField, MatInput, MatLabel, MatSuffix} from '@angular/material/input';
import {AccountToken} from '../../../interfaces/token';
import {FormsModule} from '@angular/forms';
import {FineGrainedAccessTokenLink} from '../../../constants/links';
import {StorageService} from '../../../services/storage/storage.service';

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

    protected readonly FineGrainedAccessTokenLink = FineGrainedAccessTokenLink;

    accounts: AccountToken[] = [];
    newForm: AccountToken = this.getNewAccountForm();

    constructor(
        private storageService: StorageService
    ) {
        this.refreshAccounts();
    }

    refreshAccounts() {
        this.storageService.getAccounts().then(accounts => {
            this.accounts = accounts;
        });
    }

    getNewAccountForm(): AccountToken{
        return {
            nickname: '',
            token: ''
        }
    }

    async addNewAccount(){
        await this.storageService.addAccount(this.newForm);
    }
}
