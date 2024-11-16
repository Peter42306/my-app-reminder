import React from 'react';
import PropTypes from 'prop-types';
import { VegsFruitsWrapper } from './VegsFruits.styled';

const products = [
   { title: 'Капуста', isFruit: false, id: 1 },
   { title: 'Чеснок', isFruit: false, id: 2 },
   { title: 'Яблоко', isFruit: true, id: 3 },
   { title: 'Киви', isFruit: true, id: 4 },
   { title: 'Лук', isFruit: false, id: 5 },
];

export function ShoppingList(){
   const productsSelected = products.map(product =>
      <li style={{color: product.isFruit ? 'magenta' : 'darkgreen'}}>         
         {product.id}. {product.title}
      </li>
   );
   return(
      <VegsFruitsWrapper>
         <ul>
            {productsSelected}
         </ul>
      </VegsFruitsWrapper>      
   );
}

const VegsFruits = () => (
 <VegsFruitsWrapper>
    VegsFruits Component
 </VegsFruitsWrapper>
);

VegsFruits.propTypes = {};

VegsFruits.defaultProps = {};

export default VegsFruits;
