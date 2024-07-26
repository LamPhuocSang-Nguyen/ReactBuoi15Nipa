import React from 'react'
import { useParams } from 'react-router-dom'
export default function Student() {
  const {meo}=useParams();
  return (
    <div>id la {meo}</div>
  )
}
