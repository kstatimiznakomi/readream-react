import {action, makeAutoObservable, observable} from "mobx";
import {SearchTypes} from "../types/Types";

export class SearchCriteriaStore {
    @observable params: SearchTypes = {
        p: '1',
        aid: '0',
        gen: '0',
        publisherId: '0',
        d: '',
        t: '',
    }

    @observable url: string = ''

    constructor() {
        makeAutoObservable(this)
    }

    @action
    public resetSelected = () => {
        this.params.aid = '0'
        this.params.t = ''
        this.params.d = '0'
        this.params.gen = '0'
        this.params.publisherId = '0'
        this.params.p = '1'
    }

    @action
    public setUrl = (url: string) => {
        this.url = url
    }

    @action
    public setCriteriaState = (param: string, value: string) => {
        switch (param) {
            case 'aid':
                this.params.aid = value
                break
            case 'gen':
                this.params.gen = value
                break
            case 'publisherId':
                this.params.publisherId = value
                break
            case 'd':
                this.params.d = value
                break
            case 't':
                this.params.t = value
                break
        }
    }
}