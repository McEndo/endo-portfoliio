import { describe, expect, it } from 'vitest'
import TestWriteup from './TestWriteup.mdx'
import BasicPentesting from './writeups/tryhackme/basic-pentesting.mdx'

describe('unpublished MDX drafts', () => {
  it('compiles the test writeup', () => {
    expect(typeof TestWriteup).toBe('function')
  })

  it('compiles the Basic Pentesting writeup', () => {
    expect(typeof BasicPentesting).toBe('function')
  })
})
