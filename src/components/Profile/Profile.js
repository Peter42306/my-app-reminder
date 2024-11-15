import React from 'react';
import PropTypes from 'prop-types';
import { ProfileWrapper } from './Profile.styled';

function Profile({user}) {     
   
   return (   
      <ProfileWrapper>         
         
         <h1>{user.name}</h1>        
     
         <img 
         src={user.imageUrl}
         alt={'Photo of ' + user.name}
         style={{width:user.imageW,height:'auto'}}
         ></img>         
         
      </ProfileWrapper>
     );
}

Profile.propTypes = {
   user: PropTypes.shape({
      name: PropTypes.string,
      imageUrl: PropTypes.string,
      imageW: PropTypes.number,      
   }),   
};

Profile.defaultProps = {};

export default Profile;
