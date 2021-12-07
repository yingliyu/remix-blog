/*
 * @Author: ylyu
 * @Date: 2021-12-06 15:42:00
 * @LastEditors: ylyu
 * @LastEditTime: 2021-12-06 17:44:38
 * @Description: posts
 */

import { Link, useLoaderData } from 'remix'
import { getPosts } from '~/post'
import type { Post } from '~/post'

// export const loader = () => {
//   return getPosts()
// }

export default function Posts() {
  const posts = useLoaderData<Post[]>()
  console.log(posts)
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
