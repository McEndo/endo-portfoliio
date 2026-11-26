import { describe, expect, it } from 'vitest'
import { fieldNoteUrl, parseFieldNotes } from './fieldNotes'

const note = { title: 'Pickle Rick', type: 'writeup', date: '2026-09-13', slug: 'pickle-rick' }

describe('parseFieldNotes', () => {
  it('keeps valid notes and limits the homepage to two', () => {
    const notes = [note, { ...note, slug: 'second' }, { ...note, slug: 'third' }]

    expect(parseFieldNotes(notes).map(({ slug }) => slug)).toEqual(['pickle-rick', 'second'])
  })

  it('drops entries that could produce a bad link or label', () => {
    expect(
      parseFieldNotes([
        { ...note, slug: '../../evil' },
        { ...note, slug: 'https://example.com' },
        { ...note, type: 'script' },
        { ...note, title: ' ' },
        { ...note, date: 'yesterday' },
        null,
      ]),
    ).toEqual([])
  })

  it('returns nothing for a response that is not a list', () => {
    expect(parseFieldNotes({ notes: [note] })).toEqual([])
    expect(parseFieldNotes(null)).toEqual([])
  })

  it('links directly to the note page', () => {
    expect(fieldNoteUrl('pickle-rick')).toBe('https://notes.mcendo.dev/notes/pickle-rick')
  })
})
