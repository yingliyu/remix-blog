/*
 * @Author: ylyu
 * @Date: 2021-12-06 16:57:20
 * @LastEditors: ylyu
 * @LastEditTime: 2021-12-06 17:50:48
 * @Description:
 */
import path from 'path'
import fs from 'fs/promises'
import parseFrontMatter from 'front-matter'
import invariant from 'tiny-invariant'
import { marked } from 'marked'

type NewPost = {
  title: string
  slug: string
  markdown: string
}

export type Post = {
  slug: string
  title: string
}

export type PostMarkdownAttributes = {
  title: string
}

// relative to the server output not the source!
const postsPath = path.join(__dirname, '..', 'posts')

function isValidPostAttributes(
  attributes: any
): attributes is PostMarkdownAttributes {
  return attributes?.title
}

export async function getPosts() {
  const dir = await fs.readdir(postsPath)
  return Promise.all(
    dir.map(async (filename) => {
      const file = await fs.readFile(path.join(postsPath, filename))
      const { attributes } = parseFrontMatter(file.toString())
      invariant(
        isValidPostAttributes(attributes),
        `${filename} has bad meta data!`
      )
      return {
        slug: filename.replace(/\.md$/, ''),
        title: (attributes as any).title,
      }
    })
  )
}
export async function getPost(slug: string) {
  const filepath = path.join(postsPath, slug + '.md')
  const file = await fs.readFile(filepath)
  const { attributes, body } = parseFrontMatter(file.toString())
  invariant(
    isValidPostAttributes(attributes),
    `Post ${filepath} is missing attributes`
  )
  const html = marked(body)
  return { slug, html, title: attributes.title }
}

// ...
export async function createPost(post: NewPost) {
  const md = `---\ntitle: ${post.title}\n---\n\n${post.markdown}`
  await fs.writeFile(path.join(postsPath, post.slug + '.md'), md)
  return getPost(post.slug)
}
