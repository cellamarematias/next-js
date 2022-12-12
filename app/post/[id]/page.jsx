import React from 'react'

export default function Post ({ params }) {
  const id = params.id
  console.log(id)
  return (
    <div>Este es el post: {id}</div>
  )
}
