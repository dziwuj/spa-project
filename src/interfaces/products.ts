export interface IProductsFetchProps {
  page?: number
  per_page?: number
  id?: number
}

export interface IProductListProperties {
  page: number
  perPage: number
  total: number
  totalPages: number
}

export interface IProduct {
  id: number
  name: string
  year: number
  color: string
  pantone_value: string
}
