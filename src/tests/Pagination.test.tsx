import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, BrowserRouter, Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { RootStore, rootStore } from '../stores/Root.store'
import { Pagination } from '../components/Pagination'
import { IProductsFetchProps } from '@interfaces/products'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

const productsListParams: IProductsFetchProps = {
  page: 1,
  per_page: 5,
}

describe('Pagination', () => {
  let store: RootStore

  beforeEach(() => {
    store = { ...rootStore }
    store.AppStore.params = productsListParams
  })

  it('renders the pagination component', () => {
    render(<Pagination />, { wrapper: BrowserRouter })

    expect(screen.getByText('Rows per page:')).toBeInTheDocument()
  })

  it('updates the page number when the next button is clicked', () => {
    const history = createMemoryHistory()
    render(
      <Router location={history.location} navigator={history}>
        <Pagination />
      </Router>
    )
    userEvent.click(screen.getByTitle('Go to next page'))
    expect(store.AppStore.params.page).toBe(2)
  })

  it('updates the number of rows per page when the rows per page value is changed', () => {
    render(
      <MemoryRouter>
        <Pagination />
      </MemoryRouter>
    )

    // This is a workaround for the issue with the MUI Select component

    const input = document.querySelector('[role="button"]')
    input && userEvent.click(input)

    const option = document.querySelector('li[data-value="10"]')
    option && userEvent.click(option)

    expect(store.AppStore.params.per_page).toBe(10)
  })
})
