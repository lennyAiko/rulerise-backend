import TextInput from '@/components/TextInput'
import { Link, useForm, usePage } from '@inertiajs/react'
import { useEffect, useState } from 'react'
import DefaultButton from '@/components/buttons/DefaultButton'

const Signup = () => {
  // @ts-ignore
  // const { message, error } = usePage()?.props?.flash

  const { data, setData, post } = useForm({
    email: '',
    password: '',
  })

  const [showPassword, setShowPassword] = useState(false)
  const [passwordType, setPasswordType] = useState('password')

  const [disabledButton, setDisabledButton] = useState(true)

  const changePasswordField = (e) => {
    setShowPassword(!showPassword)
    if (showPassword) {
      setPasswordType('password')
    } else {
      setPasswordType('text')
    }
  }
  useEffect(() => {
    if (data.email.length > 3) {
      setDisabledButton(false)
    } else {
      setDisabledButton(true)
    }
  }, [data.email])

  const submit = (e) => {
    e.preventDefault()
    post('/signin')
  }

  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-5 lg:mt-20">
      <img
        src="/images/rulerise.svg"
        alt="rulerise logo"
        className="h-[25px] w-[95px] lg:h-[35px] lg:w-[125px]"
      />
      <form className="space-y-3 lg:w-[30vw]">
        <TextInput
          label="Enter email"
          id="email"
          type="email"
          value={data.email}
          changeData={setData}
        />{' '}
        <TextInput
          label="Enter password"
          id="password"
          type={passwordType}
          value={data.password}
          changeData={setData}
        />
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={changePasswordField}
            className="form-checkbox"
          />
          <p className="-mt-1.5">show password</p>
        </div>
        <DefaultButton
          text="Sign in"
          type="submit"
          doThis={submit}
          disabled={disabledButton}
          className="my-3 w-full items-center justify-center rounded-lg bg-primary p-2 text-sm font-bold text-white lg:text-base"
        />
      </form>
      <p className="text-sm lg:text-base">
        New user?{' '}
        <Link href="/signup" className="text-primary">
          Sign up
        </Link>
      </p>
      {/* {message.length > 0 && <p className="text-sm text-red-600">{message}</p>}
      {error.length > 0 && <p className="text-sm text-red-600">{error}</p>} */}
    </div>
  )
}

export default Signup
