/*
 * @Author: ylyu
 * @Date: 2021-12-07 17:42:59
 * @LastEditors: ylyu
 * @LastEditTime: 2021-12-13 17:55:46
 * @Description:
 */
import type { LoaderFunction, MetaFunction } from 'remix'
import { useLoaderData, Link, useCatch, Meta } from 'remix'
import type { Joke } from '@prisma/client'
import { db } from '~/utils/db.server'

type LoaderData = { randomJoke: Joke }

export const loader: LoaderFunction = async () => {
  const count = await db.joke.count()
  const randomRowNumber = Math.floor(Math.random() * count)
  const [randomJoke] = await db.joke.findMany({
    take: 1,
    skip: randomRowNumber,
  })
  if (!randomJoke) {
    throw new Response('No random joke found', {
      status: 404,
    })
  }
  const data: LoaderData = { randomJoke }
  return data
}

export const meta: MetaFunction = () => {
  return {
    title: "Remix: So great, it's funny!",
    description: 'Remix jokes app. Learn Remix and laugh at the same time!',
  }
}

export default function JokesIndexRoute() {
  const data = useLoaderData<LoaderData>()

  return (
    <div>
      <p>Here's a random joke:</p>
      <p>{data.randomJoke.content}</p>
      <Link to={data.randomJoke.id}>"{data.randomJoke.name}" Permalink</Link>
    </div>
  )
}

export function CatchBoundary() {
  const caught = useCatch()

  if (caught.status === 404) {
    return <div className="error-container">There are no jokes to display.</div>
  }
  throw new Error(`Unexpected caught response with status: ${caught.status}`)
}

export function ErrorBoundary() {
  return <div className="error-container">I did a whoopsies.</div>
}
