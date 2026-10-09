// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen, within } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import Navbar from './Navbar'

afterEach(() => {
  cleanup()
  document.body.style.overflow = ''
})

describe('Navbar', () => {
  it('links to every portfolio section', () => {
    render(<Navbar />)

    const navigation = screen.getByRole('navigation')
    const expectedLinks = [
      ['ABOUT', '#about'],
      ['PROJECTS', '#projects'],
      ['CREDENTIALS', '#credentials'],
      ['FIELD NOTES', '#field-notes'],
      ['CONTACT', '#contact'],
    ]

    for (const [name, href] of expectedLinks) {
      expect(
        within(navigation).getByRole('link', { name }).getAttribute('href'),
      ).toBe(href)
    }
  })

  it('isolates the closed mobile menu and restores it when opened', () => {
    render(<Navbar />)

    const button = screen.getByRole('button', { name: 'MENU' })
    const menu = document.getElementById('mobile-navigation')

    expect(menu).not.toBeNull()
    expect(button.getAttribute('aria-expanded')).toBe('false')
    expect(menu?.getAttribute('aria-hidden')).toBe('true')
    expect(menu?.hasAttribute('inert')).toBe(true)

    fireEvent.click(button)

    expect(button.textContent).toBe('CLOSE')
    expect(button.getAttribute('aria-expanded')).toBe('true')
    expect(menu?.getAttribute('aria-hidden')).toBe('false')
    expect(menu?.hasAttribute('inert')).toBe(false)
    expect(document.body.style.overflow).toBe('hidden')

    fireEvent.click(within(menu as HTMLElement).getByRole('link', { name: 'ABOUT' }))

    expect(button.textContent).toBe('MENU')
    expect(button.getAttribute('aria-expanded')).toBe('false')
    expect(menu?.getAttribute('aria-hidden')).toBe('true')
    expect(menu?.hasAttribute('inert')).toBe(true)
    expect(document.body.style.overflow).toBe('')
  })
})
