import React from 'react';
import { Header } from '../../components/common/Header';

const InstitutionLayout = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  )
}



export default InstitutionLayout;