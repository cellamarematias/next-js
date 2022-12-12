'use client'

import React, { useState } from 'react'

export default function LikeButton ({ id }) {
  const [liked, setliked] = useState(false)

  return (
    <button onClick={() => setliked(!liked)}>
      {liked ? 'Me gusta' : 'No me gusta'}
    </button>
  )
}
