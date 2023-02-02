//import { StoreExample } from "./StoreExample.store";
import { action, makeAutoObservable } from 'mobx'
import { RootStore } from './Root.store'
import axios from 'axios'
import {
  IProductsFetchProps,
  IProduct,
  IProductListProperties,
} from 'interfaces/products'

export class AppStore {
  rootStore: RootStore
  params: IProductsFetchProps = {
    page: 1,
    per_page: 5,
  }
  productListProperties: IProductListProperties = {
    page: 1,
    perPage: 5,
    total: -1,
    totalPages: -1,
  }
  products: IProduct[] = []

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }

  @action.bound setQuery = (params: IProductsFetchProps) => {
    this.params = { ...params }
    console.log(params)
    this.fetchData()
  }

  @action.bound fetchData = async () => {
    try {
      const fetch = await axios.get('https://reqres.in/api/products', {
        params: this.params,
      })
      const { page, per_page, total, total_pages, data } = fetch.data
      if (data.length) {
        this.products = [...data]
      } else if (data) {
        this.products = [data]
      }
      if (page && per_page && total && total_pages) {
        this.productListProperties = {
          page: page,
          perPage: per_page,
          total: total,
          totalPages: total_pages,
        }
      } else {
        this.productListProperties = {
          page: 1,
          perPage: 5,
          total: 1,
          totalPages: 1,
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
}
