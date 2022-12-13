import React from 'react'
import { Counter } from './counter'

// este LAYUOUT mantiene el estado siempre que esté montado

export default function PostLayout ({ children }) {
  return (
    <div>
      <Counter />
      {children}
    </div>
  )
}
