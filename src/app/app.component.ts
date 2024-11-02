import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatIcon, MatIconRegistry} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {PullRequest} from './interfaces/github';
import {NgIf} from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, MatIcon, MatButtonModule, NgIf],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'tab-hub';
    reviewRequests: PullRequest[] = []

    constructor(
        private matIconRegistry: MatIconRegistry,
    ) {

        matIconRegistry.setDefaultFontSetClass('material-symbols-outlined');

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
}
