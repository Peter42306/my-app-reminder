import React from 'react';
import PropTypes from 'prop-types';
import { ParagraphWrapper } from './Paragraph.styled';

function Paragraph() {
   return (
     <ParagraphWrapper>
       <h1>ДОБРО ПОЖАЛОВАТЬ</h1>
       <button>OK</button>
     </ParagraphWrapper>
   );
 }

// const Paragraph = () => (
//  <ParagraphWrapper>
//    <h1>ДОБРО ПОЖАЛОВАТЬ</h1>
//     <button>OK</button>
//  </ParagraphWrapper>
// );

Paragraph.propTypes = {};

Paragraph.defaultProps = {};

export default Paragraph;
