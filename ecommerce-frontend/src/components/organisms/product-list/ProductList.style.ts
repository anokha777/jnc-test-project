import styled from 'styled-components';


const StyledProductList = styled.div`
    ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 100px;
        margin: 100px;
        list-style: none;

        li {
            border: 1px solid black;
            .image-conatiner, .prod-name {
                display: flex;
                justify-content: center;
            }
            img {
                width: 50%;
                aspect-ratio: 1;
            }
        }
    }
`;

export default StyledProductList;