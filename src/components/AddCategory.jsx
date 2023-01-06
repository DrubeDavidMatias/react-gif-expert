import { useState } from 'react';

export const AddCategory = ( {onNewCategory} ) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = (event) =>{
    setInputValue(event.target.value);
  }

  const onSubmit = ( event ) => {
    event.preventDefault();
    if(inputValue.trim().length<= 1 ) return;

    // setCategories((categories) => [inputValue, ...categories])
    onNewCategory( inputValue.trim() );
    setInputValue('');
  }

  return (
    <form onSubmit={ (event) => onSubmit(event)}>
        <input 
        type="text" 
        placeholder="Buscar GIFS" 
        value={inputValue}
        //onChange={(event) => onInputChange(event)} ES LA MISMA LINEA DE ABAJO
        onChange={onInputChange}
        />

    </form>
  )
}
