export interface IProductsFetchProps {
  page?: number
  per_page?: number
  id?: number
}

export interface IProductsData {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: IProduct[]
}

export interface IProduct {
  id: number
  name: string
  year: number
  color: string
  pantone_value: string
}
