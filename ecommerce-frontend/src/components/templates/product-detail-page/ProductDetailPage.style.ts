import styled from 'styled-components';


const StyledProductDetailPage = styled.div`
.product-details-page {
  h2 {
    display: flex;
    justify-content: center;
    margin: 2% 5%;
    padding: 2%;
  }
  .image-details-wrapper {
    display: flex;
    .image-container {
        width: 50%;
        display: flex;
        justify-content: center;
        img {
            width: 80%;
            aspect-ratio: 1/1;
            
        }
    }
    .product-details {
        width: 100%;
        .product-details-row {
            display: flex;
            justify-content: space-evenly;
            margin: 5%;
        }
    }
  }  

}`;

export default StyledProductDetailPage;