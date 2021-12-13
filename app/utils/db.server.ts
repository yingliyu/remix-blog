/*
 * @Author: ylyu
 * @Date: 2021-12-08 10:05:02
 * @LastEditors: ylyu
 * @LastEditTime: 2021-12-08 10:05:02
 * @Description:
 */
import { PrismaClient } from '@prisma/client'

let db: PrismaClient

declare global {
  var __db: PrismaClient | undefined
}

// this is needed because in development we don't want to restart
// the server with every change, but we want to make sure we don't
// create a new connection to the DB with every change either.
if (process.env.NODE_ENV === 'production') {
  db = new PrismaClient()
  db.$connect()
} else {
  if (!global.__db) {
    global.__db = new PrismaClient()
    global.__db.$connect()
  }
  db = global.__db
}

export { db }
