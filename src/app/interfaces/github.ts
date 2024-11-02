export interface PullRequest {
    id: number;
    title: string;
    status: PullRequestStatusType;
    url: string;
    createdAt: Date;
    repository: Repository;
}

export type PullRequestStatusType = 'open' | 'closed' | 'merged' | 'draft';
export enum PullRequestStatus {
    OPEN = 'open',
    CLOSED = 'closed',
    MERGED = 'merged',
    DRAFT = 'draft'
}

export interface Issue {
    id: number;
    title: string;
    status: IssueStatusType;
    url: string;
    createdAt: Date;
    repository: Repository;
}
export type IssueStatusType = 'open' | 'closed';
export enum IssueStatus {
    OPEN = 'open',
    CLOSED = 'closed'
}

export interface Repository {
    name: string;
    url: string;
}
