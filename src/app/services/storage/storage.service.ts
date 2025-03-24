import {Injectable} from '@angular/core';
// import * as browser from 'webextension-polyfill';
import {AccountToken} from '../../interfaces/token';

@Injectable({
    providedIn: 'root'
})
export class StorageService {


    constructor(
    ) {
    }

    // set(key: string, value: any) {
    //     return browser.storage.local.set({ [key]: value });
    // }
    //
    // get(key: string) {
    //     return browser.storage.local.get(key);
    // }
    //
    // setSync(key: string, value: any) {
    //     return browser.storage.sync.set({ [key]: value });
    // }
    //
    // getSync(key: string) {
    //     return browser.storage.sync.get(key);
    // }
    //
    // async getAccounts(): Promise<AccountToken[]> {
    //     const result = await this.get('accounts') as any;
    //     return result.accounts || [];
    // }
    //
    // async addAccount(account: AccountToken): Promise<void> {
    //     const accounts = await this.getAccounts();
    //
    //     //unique nickname
    //     const index = accounts.findIndex(a => a.nickname === account.nickname);
    //     if (index > -1) {
    //         accounts[index] = account;
    //     } else {
    //         accounts.push(account);
    //     }
    //
    //     return this.set('accounts', accounts);
    // }
    //
    // async removeAccount(account: AccountToken): Promise<void> {
    //     const accounts = await this.getAccounts();
    //     const index = accounts.findIndex(a => a.nickname === account.nickname);
    //     if (index > -1) {
    //         accounts.splice(index, 1);
    //         return this.set('accounts', accounts);
    //     }
    // }

}
