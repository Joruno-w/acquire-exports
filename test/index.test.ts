import { describe, expect, it } from 'vitest'
import getExports from '../src'

describe('ESM', () => {
  it('axios', async () => {
    expect((await getExports('axios')).slice(0,5)).toMatchInlineSnapshot(`
      [
        "request",
        "getUri",
        "delete",
        "get",
        "head",
      ]
    `)
  })
})
