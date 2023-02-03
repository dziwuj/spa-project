import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { Row } from '../components/Row'
import { IProduct } from '@interfaces/products'
import '@testing-library/jest-dom'

const product: IProduct = {
  id: 1,
  name: 'Product 1',
  year: 2020,
  color: '#000000',
  pantone_value: '123',
}

describe('Row', () => {
  it('displays the product details in a table row', () => {
    render(
      <table>
        <tbody>
          <Row {...product} />
        </tbody>
      </table>
    )
    expect(screen.getByText(product.id.toString())).toBeInTheDocument()
    expect(screen.getByText(product.name)).toBeInTheDocument()
    expect(screen.getByText(product.year.toString())).toBeInTheDocument()
  })

  it('opens the modal when the table row is clicked', () => {
    render(
      <table>
        <tbody>
          <Row {...product} />
        </tbody>
      </table>
    )
    fireEvent.click(screen.getByText(product.name))
    expect(screen.getByTestId('modal-component')).toBeInTheDocument()
  })
})
