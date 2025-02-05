import {useEffect} from 'react';
import { CategoryDataType, StoredCategoryData } from '../types/ecommerce';
type DropdownPropsType= {
  options: CategoryDataType[],
  label: string,
  setCategoryOption : Function,
  category: StoredCategoryData
}


const Dropdown = ({options, label, setCategoryOption, category}: DropdownPropsType) => {

    useEffect(() => {
      const valueToSet= category?.categoryId || options[0].id;
      setCategoryOption(valueToSet);
    }, [])
    
    
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue= event.target.value; 
        setCategoryOption(selectedValue);
    }

  return (
    <div className='dropdown-container'>
       <label htmlFor='dropdown'> {label} </label>

        <select id='dropdown'  defaultValue={category?.categoryId || options[0].id} onChange={handleChange}>
            {options && options.map((option, index) => 
                <option key={`option-${option.id}-${index}}`} value={option.id}>{option.name}</option>
            )}
        </select>
    </div>
  )
}

export default Dropdown