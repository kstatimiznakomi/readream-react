import { action, configure, makeAutoObservable, observable } from "mobx";

configure({enforceActions: 'always'})

export class IsLoadingStore {
    @observable isLoading: boolean = false
    constructor(isLoading: boolean){
        makeAutoObservable(this)
    }

    @action
    public setIsLoading = (isLoading: boolean) => {
        this.isLoading = isLoading
    }
}