export const FIELD_NOTES_URL = 'https://notes.mcendo.dev/'

export type FieldNote = {
  title: string
  type: 'note' | 'writeup'
  date: string
  slug: string
}

const isFieldNote = (value: unknown): value is FieldNote => {
  if (typeof value !== 'object' || value === null) return false

  const { title, type, date, slug } = value as Record<string, unknown>

  return (
    typeof title === 'string' &&
    title.trim().length > 0 &&
    (type === 'note' || type === 'writeup') &&
    typeof date === 'string' &&
    /^\d{4}-\d{2}-\d{2}$/.test(date) &&
    typeof slug === 'string' &&
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)
  )
}

export const parseFieldNotes = (data: unknown): FieldNote[] =>
  Array.isArray(data) ? data.filter(isFieldNote).slice(0, 2) : []

export const fieldNoteUrl = (slug: string) => `${FIELD_NOTES_URL}notes/${slug}`
