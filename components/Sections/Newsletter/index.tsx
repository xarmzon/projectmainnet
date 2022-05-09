import React, { ChangeEvent, FormEvent, useState } from 'react'
import toast from 'react-hot-toast'

const Newsletter = () => {
  const [email, setEmail] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const handledChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast.loading('Loading....')
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toast.dismiss()
      toast.success('Your email has been added successfully')
      setEmail('')
    }, 3000)
  }
  return (
    <section className="mx-auto mt-10 mb-8 w-full bg-linear3 text-center shadow-2xl sm:max-w-xl sm:rounded-md sm:p-8 md:max-w-2xl lg:max-w-3xl">
      <div className="flex flex-col space-y-5 p-5">
        <div className="">
          <h3 className="text-xl font-bold sm:text-2xl">Subscribe</h3>
          <p className="mt-1 text-sm font-light sm:text-base">
            Join the hundreds of teams using our services, subscribe to get
            exclusive news & offer
          </p>
        </div>
        <div className="">
          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-2"
          >
            <input
              type="email"
              className={`w-full rounded-lg border-slate-300 bg-gradient-to-tr from-slate-50 to-slate-100 font-light text-slate-500 outline-none ring-0 focus:border-transparent focus:to-slate-200 focus:outline-none focus:ring-0`}
              value={email}
              onChange={handledChange}
              placeholder="Email address"
              required
            />
            <button
              disabled={loading}
              type="submit"
              className="mx-auto flex w-2/3 cursor-pointer items-center justify-center space-x-2 rounded-md bg-linear2 px-4 py-2 text-center uppercase text-slate-100 transition-all duration-[300ms] hover:bg-linear4 disabled:cursor-not-allowed"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
