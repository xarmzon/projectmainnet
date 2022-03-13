export interface IMenu {
  name: string
  link: string
  btn?: boolean
}

export interface IPosition {
  top?: string
  left?: string
  bottom?: string
  right?: string
}

export type TPosition =
  | 'top-right'
  | 'top-center'
  | 'top-left'
  | 'middle-center'
  | 'middle-right'
  | 'middle-left'
  | 'bottom-right'
  | 'bottom-center'
  | 'bottom-left'

export interface IGlassyLight {
  position?: TPosition
  height?: string
  width?: string
  shape?: 'full' | 'box'
  blur?: string
  bg?: string
  opacity?: string
}

export interface IWalletItem {
  name: string
  icon: string
}

export interface IFeatures {
  head: string
  desc: string
  img: string
  imgPos: 'left' | 'right'
}

export interface IWalletData{
  name: string
  icon: string
}