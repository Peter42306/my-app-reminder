import React from 'react';
import PropTypes from 'prop-types';
import { AdditionalText, MobilePhonesWrapper, PriceActual, PriceBefore } from './MobilePhones.styled';

function MobilePhones({mobilePhone}) {
   return (
      <MobilePhonesWrapper>         
      <img
      src={mobilePhone.imageUrl}
      alt={'Photo of ' + mobilePhone.model}
      style={{width:mobilePhone.imageW, height:'auto'}}
      ></img>      
      <p>{mobilePhone.model}</p>
      <p>{'Rating: ' + mobilePhone.rating}</p>
      <p><PriceBefore>{mobilePhone.priceBefore + ' uah'}</PriceBefore></p>
      <p><PriceActual>{mobilePhone.priceActual + ' uah'}</PriceActual></p>
      <p><AdditionalText>{mobilePhone.additionalText}</AdditionalText></p>
      </MobilePhonesWrapper>
   );
}

MobilePhones.propTypes = {
   user: PropTypes.shape({
      model: PropTypes.string,
      imageUrl: PropTypes.string,
      imageW: PropTypes.number,      
      rating: PropTypes.number,
      priceActual: PropTypes.number,
      priceBefore: PropTypes.number,
      additionalText: PropTypes.string,
   }),
};

MobilePhones.defaultProps = {};

export default MobilePhones;
