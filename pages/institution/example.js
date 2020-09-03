import React from 'react';
import ProtectRoute from '../../hocs/ProtectedRoute';

const Example = () => {
  return (
    <>
      <h1>Example</h1>
    </>
  );
}

export default ProtectRoute(Example);