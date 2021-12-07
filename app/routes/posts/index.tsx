/*
 * @Author: ylyu
 * @Date: 2021-12-06 15:42:00
 * @LastEditors: ylyu
 * @LastEditTime: 2021-12-07 15:21:11
 * @Description:
 */
import { Link, useLoaderData } from 'remix'

import { getPosts } from '~/post'
import type { Post } from '~/post'

export let loader = () => {
  return getPosts()
}

export default function Posts() {
  let posts = useLoaderData<Post[]>()
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
