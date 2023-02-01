import { AppStore } from './App.store'
export class RootStore {
  AppStore: AppStore

  constructor() {
    this.AppStore = new AppStore(this)
  }
}

export const rootStore = new RootStore()
