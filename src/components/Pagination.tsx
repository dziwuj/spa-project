import React, { useContext } from 'react'
import { observer } from 'mobx-react'
import { StoreContext } from '../index'
import { useSearchParams } from 'react-router-dom'

import TablePagination from '@mui/material/TablePagination'

const Pagination: React.FunctionComponent = observer(() => {
  const store = useContext(StoreContext)
  const { page, perPage, total } = store.AppStore.productListProperties
  const [searchParams, setSearchParams] = useSearchParams()

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    store.AppStore.setQuery({ page: newPage + 1, per_page: perPage })
    setSearchParams({
      page: (newPage + 1).toString(),
      per_page: perPage.toString(),
    })
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    store.AppStore.setQuery({
      per_page: parseInt(event.target.value, 10),
      page: 1,
    })
    setSearchParams({ per_page: event.target.value, page: '1' })
  }

  return (
    <TablePagination
      component='div'
      count={total}
      page={page - 1}
      rowsPerPageOptions={[5, 10, { value: -1, label: 'All' }]}
      rowsPerPage={perPage}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  )
})

export { Pagination }
