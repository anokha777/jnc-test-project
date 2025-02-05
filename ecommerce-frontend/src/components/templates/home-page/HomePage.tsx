import {useState, useEffect} from 'react'
import Dropdown from '../../atoms/Dropdown'
import useDataFetchQuery, { StateType } from '../../custom-hook/useDataFetchQuery'
import ProductList from '../../organisms/product-list/ProductList';
import useLocalStorage from '../../custom-hook/useLocalStorage';
import {type CategoryDataType, type ProductDataType} from '../../types/ecommerce'
const HomePage = () => {
  const baseUri= import.meta.env.VITE_BACKEND_BASE_URI;
  
  const catData = useDataFetchQuery(`${baseUri}/categories`) as StateType;
  const { loading, data, error } = useDataFetchQuery(`${baseUri}/products`) as StateType;

  const [category, setCategory]= useLocalStorage('categoryData', null);
  const [products, setProducts]=  useState<[] | ProductDataType[]>([]);
  
  useEffect(() => {  
    if(category?.categoryId && Array.isArray(data)) {
      const productsByCategory = data.filter(m => {
        if('categoryId' in m)
          return m.categoryId == category?.categoryId
      }) as ProductDataType[];
      setProducts(productsByCategory);
    }
  }, [data, category?.categoryId])

  const setCategoryOption = (val: string) => {
    if(Array.isArray(catData.data)) {
      const filteredCategory = catData.data.filter((ele: CategoryDataType) => ele.id.toString() === val.toString());      
      if(filteredCategory && filteredCategory.length) {
        const selectedCategory= filteredCategory[0];
        const {id, name}= selectedCategory;
        const newCategorySelected= {categoryId:id, categoryName: name};
        setCategory(newCategorySelected);
      }
    }
  }
  
  return (
    <div>
        <h1>HomePage</h1>
        {catData.error && (<h2>Something went wrong in fetching categories ......</h2>)}
        {catData.loading && (<div> Categories Are Loading ....</div>)}
        {catData.data && Array.isArray(catData.data) && catData.data.length && (
          <section>
            <Dropdown 
              options={catData.data} 
              label='Select Categories'
              setCategoryOption={setCategoryOption} 
              category={category}
            />
          </section>
        )}
        {error && (<h3>Something went wrong- Products cannot be fetched</h3>)}
        {loading && (<h2>Loading Product List ...</h2>)}
        {category && (
          <div>
              <ProductList category={category} products={products}  />
          </div>
        )}
    </div>
  )
}

export default HomePage;
