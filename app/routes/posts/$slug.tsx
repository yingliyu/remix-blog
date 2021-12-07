/*
 * @Author: ylyu
 * @Date: 2021-12-06 17:17:59
 * @LastEditors: ylyu
 * @LastEditTime: 2021-12-07 15:21:09
 * @Description:
 */
import { useLoaderData } from 'remix'
import type { LoaderFunction } from 'remix'
import invariant from 'tiny-invariant'

import { getPost } from '~/post'

export let loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, 'expected params.slug')
  return getPost(params.slug)
}

export default function PostSlug() {
  let post = useLoaderData()
  return <div dangerouslySetInnerHTML={{ __html: post.html }} />
}
