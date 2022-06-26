import { FC } from 'react'

// [Interfaces]
import { IAutocomplete } from './Autocomplete.interfaces'
// [Styles]
import * as s from './Autocomplete.styled'

const Autocomplete: FC<IAutocomplete> = ({ children }) => {
	return <s.AutocompleteContainer>{children}</s.AutocompleteContainer>
}

export default Autocomplete
