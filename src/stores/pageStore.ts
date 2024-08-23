import { action, configure, makeAutoObservable, observable } from "mobx";

configure({enforceActions: 'always'})

export class PageStore {
    @observable page: number = 1
    constructor(page: number){
        makeAutoObservable(this)
    }

    @action
    public setPage = (Page: number) => {
        this.page = Page
    }
}