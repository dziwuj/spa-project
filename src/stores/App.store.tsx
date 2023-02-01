//import { StoreExample } from "./StoreExample.store";
import { action, makeAutoObservable } from 'mobx'
import { RootStore } from './Root.store'
import axios from 'axios'
import { IProductsFetchProps, IProduct } from 'interfaces/products'

export class AppStore {
  rootStore: RootStore
  products: IProduct[] = []

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }

  @action.bound fetchData = async (params: IProductsFetchProps) => {
    try {
      const fetch = await axios.get('https://reqres.in/api/products', {
        params: params,
      })
      console.log(fetch.data)
      // if (fetch.data.data) {
      //   this.products = [...fetch.data.data]
      // }
    } catch (error) {
      console.log(error)
    }
  }
}
