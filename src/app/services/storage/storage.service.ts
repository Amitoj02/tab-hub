import {Injectable, isDevMode} from '@angular/core';
import {AccountToken} from '../../interfaces/token';
import {environment} from '../../../environment';

@Injectable({
    providedIn: 'root'
})
export class StorageService {


    constructor(
    ) {
        if(environment.production) {
            console.log('production mode');
        } else {
            console.log('dev mode');
        }
    }

    set(key: string, value: any) {
        if(environment.production)  {
            return (window as any).browser.storage.local.set({ [key]: value });
        } else {
            return localStorage.setItem(key, value);
        }
    }

    get(key: string) {
        if(environment.production)  {
            return (window as any).browser.storage.local.get(key);
        } else {
            return localStorage.getItem(key);
        }
    }

    setSync(key: string, value: any) {
        if(environment.production)  {
            return (window as any).browser.storage.sync.set({ [key]: value });
        } else {
            return localStorage.setItem(key, value);
        }
    }

    getSync(key: string) {
        if(environment.production)  {
            return (window as any).browser.storage.sync.get(key);
        } else {
            return localStorage.getItem(key);
        }
    }

    async getAccounts(): Promise<AccountToken[]> {
        const result = await this.get('accounts') as any;
        return result?.accounts || [];
    }

    async addAccount(account: AccountToken): Promise<void> {
        const accounts = await this.getAccounts();

        //unique nickname
        const index = accounts.findIndex(a => a.nickname === account.nickname);
        if (index > -1) {
            accounts[index] = account;
        } else {
            accounts.push(account);
        }

        return this.set('accounts', accounts);
    }

    async removeAccount(account: AccountToken): Promise<void> {
        const accounts = await this.getAccounts();
        const index = accounts.findIndex(a => a.nickname === account.nickname);
        if (index > -1) {
            accounts.splice(index, 1);
            return this.set('accounts', accounts);
        }
    }

}
