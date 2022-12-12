import Link from 'next/link'
import React from 'react'
import LikeButton from './LikeButton'

// const fetchPosts = () => {
//   return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })
//     .then(res => res.json())
// }

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 60 } })
    .then(res => res.json())
}

export default async function ListOfPosts () {
  const posts = await fetchPosts()
  return (
    posts.slice(0, 5).map(post => (
      <article key={post.id}>
        <Link href='/post/[id]' as={`/post/${post.id}`}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </Link>
        <LikeButton id={post.id} />
      </article>
    ))
  )
}
