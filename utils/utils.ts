import { TPosition } from './types'

export const generatePosition = (pos: TPosition): string => {
  let position = '-top-12 -right-12'
  switch (pos) {
    case 'top-right':
      position = '-top-14 -right-24'
      break
    case 'top-left':
      position = '-top-12 -left-12'
      break
    case 'top-center':
      position = '-top-12 left-1/2 -translate-x-1/2'
      break

    case 'middle-right':
      position = 'top-1/2 -translate-y-1/2 -right-12'
      break
    case 'middle-left':
      position = 'top-1/2 -translate-y-1/2 -left-12'
      break
    case 'middle-center':
      position = 'top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2'
      break

    case 'bottom-right':
      position = '-bottom-12 -right-12'
      break
    case 'bottom-left':
      position = '-bottom-12 -left-12'
      break
    case 'bottom-center':
      position = '-bottom-12 -translate-x-1/2 left-1/2'
      break
  }
  return position
}

export const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1)
