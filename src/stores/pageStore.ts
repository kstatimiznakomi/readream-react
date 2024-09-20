import {action, configure, makeAutoObservable, observable} from "mobx";

configure({enforceActions: 'always'})

export class PageStore {
    @observable page: number = 1
    @observable totalPages: number = 4

    constructor() {
        makeAutoObservable(this)
    }

    @action
    public setPage = (Page: number) => {
        this.page = Page
    }

    @action
    public setTotalPages = (totalPages: number) => {
        this.totalPages = totalPages
    }
}