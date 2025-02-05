import { Link } from "react-router-dom";
import Image from '../../atoms/Image';
import StyledProductList from './ProductList.style';
import {type StoredCategoryData , type ProductDataType} from '../../types/ecommerce'
type ProductListPropsType = {
  category: StoredCategoryData,
  products: ProductDataType[]
}
const ProductList = ({category, products}: ProductListPropsType) => {
     
  return (

    <StyledProductList>
      <div>
          <ul className='product-list-container'>
        {products && products.map((prod: ProductDataType,index: number) => {
          const uniqueKey= `${prod.id}-${index}`;
          
          return (
            <li key={uniqueKey}>
              <Link to={`/${category.categoryName}/${prod.id}`}>
                  <div className="image-conatiner">
                    <Image src={prod.imageUrl} altText={prod.name} />
                  </div>
                  <div className="prod-name">
                    {prod.name}
                </div>
              </Link> 
            </li>
          )
        })}
      </ul>
      </div>

    </StyledProductList>
  )
}

export default ProductList;
