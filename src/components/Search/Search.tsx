import React, { useState } from 'react'
import {
  LocationButton,
  LocationIcon,
  SearchElement,
  SearchIcon,
  SearchInput,
  SearchResult
} from './styled'

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const onSearchInputChanged = (e: any) => {
    setSearchTerm(e.target.value)
  }

  return (
    <SearchElement>
      <SearchIcon />
      <SearchInput onChange={onSearchInputChanged} />
    </SearchElement>
  )
}

export default Search
