export class ApiError extends Error {
  code: number
  name: string

  constructor(msg: string, code: number) {
    super(msg)
    this.name = 'ApiError'
    this.code = code
  }
}

export const createError = (msg: string, code: number) => {
  throw new ApiError(msg, code)
}

export const getErrorMessage = (e: any) => {
  return e?.response?.msg
    ? e?.response?.msg
    : e?.message
    ? e?.message
    : 'Unknown Error Occurred. Please try again'
}
