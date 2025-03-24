import {Component} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';
import {ListItemComponent} from '../../components/list-item/list-item.component';
import {AccountSettingsComponent} from '../../components/settings/account-settings/account-settings.component';
import {RepositorySettingsComponent} from '../../components/settings/repository-settings/repository-settings.component';
import {AppearanceSettingsComponent} from '../../components/settings/appearance-settings/appearance-settings.component';
import {AboutComponent} from '../../components/about/about.component';
import {StorageService} from '../../services/storage/storage.service';
import {AccountToken} from '../../interfaces/token';

interface SettingMenuItem {
    name: string;
    icon: string;
}

@Component({
    selector: 'app-settings',
    imports: [MatDialogModule, MatButtonModule, ReactiveFormsModule, ListItemComponent, AccountSettingsComponent, RepositorySettingsComponent, AppearanceSettingsComponent, AboutComponent],
    templateUrl: './settings.component.html',
    styleUrl: './settings.component.scss'
})
export class SettingsComponent {

    settingMenuItems: SettingMenuItem[] = [
        {
            name: 'Accounts',
            icon: 'account_circle'
        },
        {
            name: 'Repositories',
            icon: 'category'
        },
        {
            name: 'Appearance',
            icon: 'palette'
        },
        {
            name: 'About',
            icon: 'info'
        }
    ]

    currentPage: SettingMenuItem;
    accounts: AccountToken[] = [];

    constructor(
        private storageService: StorageService
    ) {
        this.currentPage = this.settingMenuItems[0];
        this.refreshAccounts();
    }

    refreshAccounts() {
        // this.storageService.getAccounts().then(accounts => {
        //     this.accounts = accounts;
        // });
    }

}
