/*
 * @Author: ylyu
 * @Date: 2021-12-06 17:17:59
 * @LastEditors: ylyu
 * @LastEditTime: 2021-12-06 17:49:40
 * @Description:
 */

import { useLoaderData } from 'remix'
import type { LoaderFunction } from 'remix'
import { getPost } from '~/post'
import invariant from 'tiny-invariant'

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, 'expected params.slug')
  return getPost(params.slug)
}

export default function PostSlug() {
  const post = useLoaderData()
  return <div dangerouslySetInnerHTML={{ __html: post.html }} />
}
