import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ModalComponent } from '../components/ModalComponent'
import { IProduct } from '@interfaces/products'

import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

const properties: IProduct = {
  id: 1,
  name: 'Product 1',
  year: 2020,
  color: '#000000',
  pantone_value: '123',
}

describe('ModalComponent', () => {
  it('displays the product properties', () => {
    render(
      <ModalComponent open={true} setOpen={jest.fn()} properties={properties} />
    )
    Object.entries(properties).forEach(([key, value]) => {
      expect(screen.getByText(`${key}: ${value}`)).toBeInTheDocument()
    })
  })

  it('closes the modal when esc is clicked', () => {
    const setOpen = jest.fn()
    render(
      <ModalComponent open={true} setOpen={setOpen} properties={properties} />
    )
    userEvent.keyboard('{esc}')
    expect(setOpen).toHaveBeenCalledWith(false)
  })

  it('closes the modal when user clicked outside element', () => {
    const setOpen = jest.fn()
    render(
      <ModalComponent open={true} setOpen={setOpen} properties={properties} />
    )
    const element = screen.getByRole('presentation').firstChild
    element && fireEvent.click(element)
    expect(setOpen).toHaveBeenCalledWith(false)
  })
})
