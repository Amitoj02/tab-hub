import {Injectable} from '@angular/core';
import {token} from '../../secret';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private accessToken: string = token;
    private baseUrl: string = 'https://api.github.com';

    constructor(
        private http: HttpClient
    ) {

    }

    getHeader() {
        return {
            'Authorization': `token ${this.accessToken}`
        }
    }

    getIssues(owner: string, repo: string){
        const url = `${this.baseUrl}/repos/${owner}/${repo}/issues`;
        const params = {
            state: 'all',
            per_page: 100,
            page: 1
        }
        return this.http.get(url, {headers: this.getHeader(), params});
    }

}
