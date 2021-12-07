/*
 * @Author: ylyu
 * @Date: 2021-12-06 17:29:04
 * @LastEditors: ylyu
 * @LastEditTime: 2021-12-07 15:21:21
 * @Description:
 */
import { Link } from 'remix'

export default function AdminIndex() {
  return (
    <p>
      <Link to="new">Create a New Post</Link>
    </p>
  )
}
