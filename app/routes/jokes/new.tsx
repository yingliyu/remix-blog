/*
 * @Author: ylyu
 * @Date: 2021-12-07 17:39:18
 * @LastEditors: ylyu
 * @LastEditTime: 2021-12-07 17:47:47
 * @Description:
 */
export default function NewJokeRoute() {
  return (
    <div>
      <p>Add your own hilarious joke</p>
      <form method="post">
        <div>
          <label>
            Name: <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Content: <textarea name="content" />
          </label>
        </div>
        <div>
          <button type="submit" className="button">
            Add
          </button>
        </div>
      </form>
    </div>
  )
}
