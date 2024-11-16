import React from 'react';
import PropTypes from 'prop-types';
import { AdditionalText, MobilePhonesWrapper, PriceActual, PriceBefore } from './MobilePhones.styled';

function MobilePhones(props) {
   return (
      <MobilePhonesWrapper>         
      <img
      src={props.mobilePhone.imageUrl}
      alt={'Photo of ' + props.mobilePhone.model}
      style={{width:props.mobilePhone.imageW, height:'auto'}}
      ></img>      
      <p>{props.mobilePhone.model}</p>
      <p>{'Rating: ' + props.mobilePhone.rating}</p>
      <p><PriceBefore>{props.mobilePhone.priceBefore + ' uah'}</PriceBefore></p>
      <p><PriceActual>{props.mobilePhone.priceActual + ' uah'}</PriceActual></p>
      <p><AdditionalText>{props.mobilePhone.additionalText}</AdditionalText></p>
      </MobilePhonesWrapper>
   );
}

// function MobilePhones({mobilePhone}) {
//    return (
//       <MobilePhonesWrapper>         
//       <img
//       src={mobilePhone.imageUrl}
//       alt={'Photo of ' + mobilePhone.model}
//       style={{width:mobilePhone.imageW, height:'auto'}}
//       ></img>      
//       <p>{mobilePhone.model}</p>
//       <p>{'Rating: ' + mobilePhone.rating}</p>
//       <p><PriceBefore>{mobilePhone.priceBefore + ' uah'}</PriceBefore></p>
//       <p><PriceActual>{mobilePhone.priceActual + ' uah'}</PriceActual></p>
//       <p><AdditionalText>{mobilePhone.additionalText}</AdditionalText></p>
//       </MobilePhonesWrapper>
//    );
// }

MobilePhones.propTypes = {
   mobilePhone: PropTypes.shape({
      model: PropTypes.string,
      imageUrl: PropTypes.string,
      imageW: PropTypes.number,      
      rating: PropTypes.number,
      priceActual: PropTypes.number,
      priceBefore: PropTypes.number,
      additionalText: PropTypes.string,
   }),
};

MobilePhones.defaultProps = {
   mobilePhone:{
      model: 'Unknown model',      
      imageW: 150,
      rating: null,
      priceActual: null,      
   },
};

export default MobilePhones;
