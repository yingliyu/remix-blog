/*
 * @Author: ylyu
 * @Date: 2021-12-07 17:40:10
 * @LastEditors: ylyu
 * @LastEditTime: 2021-12-07 18:07:04
 * @Description:
 */
import type { LinksFunction } from 'remix'
import { Link } from 'remix'
import stylesUrl from '../styles/index.css'

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: stylesUrl,
    },
  ]
}

export default function Index() {
  return (
    <div className="container">
      <div className="content">
        <h1>
          Remix <span>Jokes!</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="jokes">Read Jokes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
