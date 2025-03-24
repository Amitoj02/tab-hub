import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatIcon, MatIconRegistry} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {PullRequest} from './interfaces/github';
import {NgIf} from '@angular/common';
import {DomSanitizer} from '@angular/platform-browser';
import {MatDialog} from '@angular/material/dialog';
import {SettingsComponent} from './dialogs/settings/settings.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, MatIcon, MatButtonModule, NgIf],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'tab-hub';
    reviewRequests: PullRequest[] = []
    readonly dialog = inject(MatDialog)

    constructor(
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer
    ) {

        this.registerMatIcons();

        for(let i = 0; i < 10; i++) {
            this.reviewRequests.push({
                id: i,
                title: 'Add new feature',
                status: 'open',
                url: 'https://google.com',
                createdAt: new Date(),
                repository: {
                    name: 'tab-hub',
                    url: 'https://google.com'
                }
            });
        }

    }

    registerMatIcons() {
        this.matIconRegistry.setDefaultFontSetClass('material-symbols-outlined');
        this.matIconRegistry.addSvgIcon('pr_open', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/ic_pull_request_green.svg'));
        this.matIconRegistry.addSvgIcon('pr_merged', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/ic_pull_request_purple.svg'));
        this.matIconRegistry.addSvgIcon('pr_closed', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/ic_pull_request_closed.svg'));
        this.matIconRegistry.addSvgIcon('pr_draft', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/ic_pull_request_draft.svg'));
    }

    openSettings(){
        this.dialog.open(SettingsComponent, {
            width: '70%',
            height: '90%',
            panelClass: 'settings-dialog-panel'
        });
    }
}
