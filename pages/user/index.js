import React from 'react';

import ProtectedRoute from './../../hocs/ProtectedRoute';

const User = () => {
  return (
    <>User</>
  )
}

export default ProtectedRoute(User);