import { createContext } from 'react';
import { IsLoadingStore } from './isLoadingStore';
import { PageStore } from './pageStore';

export const pageStore = createContext(new PageStore(1))
export const isLoadingStore = createContext(new IsLoadingStore(false))