import React from 'react';
import FloatingLabelInput from '@/components/shared/Input/Input';

const UserProfile = ({ userData, handleUserDataChange }) => {
  return (
    <>
      <FloatingLabelInput
        type="text"
        name="displayName"
        value={userData.displayName || ''}
        onChange={handleUserDataChange}
        label="Display Name"
        width="250px"
      />

      <FloatingLabelInput
        type="email"
        name="email"
        value={userData.email || ''}
        onChange={handleUserDataChange}
        label="Email"
        width="250px"
      />
    </>
  );
};

export default UserProfile;