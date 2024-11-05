import React from 'react'

// Component Imports 
import Form from './Form';
import Link from 'next/link';

const SignupFormContent = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center max-w-[475px] mr-auto ml-auto">
        <div className="w-full flex flex-col items-start gap-1 mb-12">
          <h1 className="text-[2.1rem] font-semibold tracking-tight">Create an Account</h1>
          <p className="text-[16px] font-medium text-neutral-600 tracking-tight dark:text-neutral-500">Sign up to recieve exclusive deals, purchase tickets, and more!</p>
        </div>
        <div className="flex flex-col gap-7 w-full">
        <Form />
          <p className="mb-20 font-medium text-neutral-600 mt-2 w-full text-center">Already have an account? <Link href="login" className="text-blue-500 hover:text-blue-600">Log in.</Link></p>
        </div>
      </div>
    </>
  )
}

export default SignupFormContent;