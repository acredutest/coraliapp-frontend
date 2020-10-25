import React from 'react';
import { Header } from '../../components/institution/Header';

const InstitutionLayout = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  )
}



export default InstitutionLayout;