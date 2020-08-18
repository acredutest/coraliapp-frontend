import React from 'react'
import { useSelector } from 'react-redux'

export default function Page() {
  const user = useSelector(state => state.auth.user);

  return <>Nuevito</>
}