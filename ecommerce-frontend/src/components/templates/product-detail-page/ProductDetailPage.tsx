import { useParams } from "react-router-dom";
import Image from '../../atoms/Image';
import StyledProductDetailPage from './ProductDetailPage.style';
import useDataFetchQuery from '../../custom-hook/useDataFetchQuery';
import { ProductDataType } from "../../types/ecommerce";

const ProductDetailPage = () => {
  const baseUri= import.meta.env.VITE_BACKEND_BASE_URI;
  const params = useParams();
   
  const {categoryName, productId}= params;
  const { loading, data , error: productDetailsError} = useDataFetchQuery(`${baseUri}/products/${productId}`);  
  console.log('productDetailsData ', data);
  
  if(loading) {
      return (<h2>Loading Product details</h2>);
    } else if(productDetailsError) {
      return (<h3>Something went wrong in fetching data .....</h3>)
    } else  if(data) {
      const {imageUrl, name} = data as ProductDataType;     
      return(
            <StyledProductDetailPage>
       <div className='product-details-page'>
        <h2>Products Detail Page</h2>
        <div className='image-details-wrapper'>
          <div className="image-container">
            <Image src={imageUrl} altText={name} />
          </div>
          <div className="product-details">
                <div className="product-details-row prod-category">
                  <div className="prod-label">Category</div>
                  <div className="prod-data">{categoryName?.toUpperCase()}</div>
                </div>
  
                <div className="product-details-row prod-name">
                  <div className="prod-label">Product Name</div>
                  {name && (
                    <div className="prod-data">{name?.toUpperCase()}</div>
                  )}
                </div>
  
                <div className="product-details-row prod-description">
                  <div className="prod-label">Product Description</div>
                  <div className="prod-data"></div>
                </div>
              </div>
        </div>
        </div>
        </StyledProductDetailPage>
      )
    }
  return null;
}

export default ProductDetailPage