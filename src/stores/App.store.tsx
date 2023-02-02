//import { StoreExample } from "./StoreExample.store";
import { action, makeAutoObservable } from 'mobx'
import { RootStore } from './Root.store'
import axios from 'axios'
import { IProductsFetchProps, IProduct } from 'interfaces/products'

export class AppStore {
  rootStore: RootStore
  params: IProductsFetchProps = {
    page: 1,
    per_page: 5,
  }
  products: IProduct[] = []

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }

  @action.bound setQuery = (params: IProductsFetchProps) => {
    this.params = { ...params }
    this.fetchData()
  }

  @action.bound fetchData = async () => {
    try {
      const fetch = await axios.get('https://reqres.in/api/products', {
        params: this.params,
      })
      if (fetch.data.data.length) {
        this.products = [...fetch.data.data]
      } else if (fetch.data.data) {
        this.products = [fetch.data.data]
      }
      console.log(this.products)
    } catch (error) {
      console.log(error)
    }
  }
}
