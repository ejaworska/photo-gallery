import React from 'react';

const SearchForm = ({change, placeholder}) => { 

	return (
		<form className='search-form'>
			<input
				type='text'
				onChange={change}
				placeholder={placeholder}
			/>
		</form>
	);
}

export default SearchForm;