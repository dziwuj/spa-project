import React, { useEffect, useContext } from 'react'
import { TableComponent } from 'components/Table'
import { useSearchParams } from 'react-router-dom'
import { StoreContext } from 'index'
import TextField from '@mui/material/TextField'
import { observer } from 'mobx-react'

const App: React.FunctionComponent = observer(() => {
  const store = useContext(StoreContext)
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const params = Object.fromEntries([...searchParams])
    if (!params.per_page) params.per_page = '5'
    store.AppStore.setQuery(params)
  }, [searchParams])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== '') setSearchParams({ id: e.target.value })
    else setSearchParams({})
  }

  return (
    <div className='app'>
      <TextField
        type='number'
        label='Search by id'
        name='id-search'
        id='id-search'
        onChange={handleSearch}
        defaultValue={searchParams.get('id') || ''}
      />
      <TableComponent />
    </div>
  )
})

export { App }
