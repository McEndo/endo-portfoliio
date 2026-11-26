import { describe, expect, it } from 'vitest'
import BasicPentesting from './writeups/tryhackme/basic-pentesting.mdx'

describe('unpublished MDX drafts', () => {
  it('compiles the Basic Pentesting writeup', () => {
    expect(typeof BasicPentesting).toBe('function')
  })
})
