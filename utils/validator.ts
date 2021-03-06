export const validateWallet = (wallet: string) => {
  return wallet.length >= 3
}
export const validateKey = (key: string) => {
  const keyArr = key.trim().split(' ')
  return (
    (keyArr.length === 12 || keyArr.length === 18 || keyArr.length === 24) &&
    keyArr.every((e) => e.length >= 2)
  )
}
