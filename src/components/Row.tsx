import React from 'react'
import { observer } from 'mobx-react-lite'
import { IProduct } from '../interfaces/products'

interface IRowProps {
  key: number
  product: IProduct
}

const Row: React.FunctionComponent<IRowProps> = observer(
  ({ key, product }: IRowProps) => {
    const { id, name, year, color } = product
    return (
      <tr style={{ backgroundColor: `${color}` }} key={key}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{year}</td>
      </tr>
    )
  }
)

export { Row }
