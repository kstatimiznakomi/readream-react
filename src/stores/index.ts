import {createContext} from 'react';
import {IsLoadingStore} from './isLoadingStore';
import {PageStore} from './pageStore';
import {SearchCriteriaStore} from "./searchCriteriaStore";

export const pageStore = createContext(new PageStore())
export const isLoadingStore = createContext(new IsLoadingStore())
export const searchCriteria = createContext(new SearchCriteriaStore())