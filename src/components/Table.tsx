import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useSearchParams } from 'react-router-dom'
import { IProduct } from '../interfaces/products'
import { Row } from './Row'
import { StoreContext } from '../index'

const Table: React.FunctionComponent = observer(() => {
  const store = useContext(StoreContext)
  const { products } = store.AppStore
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    console.log(searchParams.get('page'))
    // store.AppStore.fetchData()
  }, [])

  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>year</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product: IProduct) => (
          <Row key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  )
})

export { Table }
