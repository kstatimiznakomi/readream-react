import {makeAutoObservable, observable} from "mobx";
import {SearchTypes} from "../types/Types";

export class SearchCriteria {
    @observable url: SearchTypes = {}

    constructor() {
        makeAutoObservable(this)
    }
}