/*
 * @Author: ylyu
 * @Date: 2021-12-13 16:34:20
 * @LastEditors: ylyu
 * @LastEditTime: 2021-12-13 16:34:21
 * @Description:
 */
import type { ActionFunction, LoaderFunction } from 'remix'
import { redirect } from 'remix'
import { logout } from '~/utils/session.server'

export const action: ActionFunction = async ({ request }) => {
  return logout(request)
}

export const loader: LoaderFunction = async () => {
  return redirect('/')
}
