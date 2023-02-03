import { render, cleanup } from '@testing-library/react'
import { StoreContext } from '../index'
import { TableComponent } from '@components/TableComponent'
import { rootStore } from '@stores/Root.store'

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
