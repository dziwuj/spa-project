import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import { StoreContext } from '../index'
import { TableComponent } from '../components/TableComponent'
import { rootStore } from '../stores/Root.store'
import { IProduct } from '@interfaces/products'

const products: IProduct[] = [
  {
    id: 1,
    name: 'product 1',
    year: 2020,
    color: '#000000',
    pantone_value: '123',
  },
  {
    id: 2,
    name: 'product 2',
    year: 2022,
    color: '#ffffff',
    pantone_value: '456',
  },
]

rootStore.AppStore.products = products

describe('TableComponent', () => {
  afterEach(cleanup)

  it('renders the table with products', () => {
    const { getByText } = render(
      <StoreContext.Provider value={rootStore}>
        <TableComponent />
      </StoreContext.Provider>
    )

    expect(getByText('id')).toBeInTheDocument()
    expect(getByText('name')).toBeInTheDocument()
    expect(getByText('year')).toBeInTheDocument()
    expect(getByText('product 1')).toBeInTheDocument()
    expect(getByText('product 2')).toBeInTheDocument()
    expect(getByText('2020')).toBeInTheDocument()
    expect(getByText('2022')).toBeInTheDocument()
  })
})
