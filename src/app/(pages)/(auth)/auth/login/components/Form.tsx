"use client"
import React, { useState, useEffect } from 'react'
import axios from "axios";

import toast, { Toaster } from "react-hot-toast";

const notify = ( message: string, isError?: boolean, isSuccess?: boolean ) => {
  if (isError) {
    toast.error(message)
    return
  } else if (isSuccess) {
    toast.success(message)
    return
  }
  toast(message)
}

const Form = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<boolean>(false);

//   useEffect(() => {
//     console.log("test", { cookies })
//     if (cookies.token) {
//       window.location.replace("/");
//     }
//   }, [])

  const updateEmail = (e: any) => {
    setEmailError(() => false);
    setEmail(() => e.target.value);
  }
  const updatePassword = (e: any) => {
    setPasswordError(() => false);
    setPassword(() => e.target.value);
  }

//   useEffect(() => {
//     if (isFinished) {
//       setTimeout(() => {
//         window.location.replace("/")
//       }, 1000)
//     }
//   }, [isFinished])

  const handleFormSubmit = () => {
    let errorCount: number = 0;
    setIsLoading(true);
    if (!email.trim()) {
      setEmailError(() => true);
      errorCount++
      setIsLoading(false);
    }
    if (!password.trim()) {
      setPasswordError(() => true);
      errorCount++
      setIsLoading(false);
    }
    if (errorCount > 0) {
      return
    }

    axios.post('/api/user/login', {
      email: email,
      password: password
    })
    .then(response => {
    //   setCookie(null, 'token', response.data.token)
    //   setCookie(null, '__obj1', response.data.fullName)
    //   setCookie(null, '__obj2', response.data.id)
      console.log(response.data)
      console.log("SUCCESSFULLY SIGNED UP!");
      console.log("RESPONSE:", response)
      notify("Success!", false, true);
      setIsFinished(() => true);
    })
    .catch(error => {
        console.error("An error has occured. Please check DB and Server logs.");
        if (error.response.status === 401) {
          notify("No user with that email exists.", true)
        } 
        if (error.response.status === 403) {
          notify("Invalid credentials.", true)
        }
        setIsLoading(() => false);
    })
    // .finally(() => {
    // })

  }
  return (
  <>
      <div className="w-full flex flex-col items-start font-medium text-md justify-start text-neutral-700 gap-3">
        <p className={`${ emailError && "text-primary-red" }`}>Email*</p>
        <input type='text' onChange={updateEmail} value={email} placeholder='Enter your email' className="px-4 py-2.5 bg-white border-[1px] border-neutral-200 rounded-md focus:outline-none focus:border-neutral-300 w-full text-neutral-700 font-medium" />
      </div>
      <div className="w-full flex flex-col items-start font-medium text-md justify-start text-neutral-700 gap-3">
        <p className={`${ passwordError && "text-primary-red" }`}>Password*</p>
        <input type='password' onChange={updatePassword} value={password} placeholder='Enter your password' className="px-4 py-2.5 bg-white border-[1px] border-neutral-200 rounded-md focus:outline-none focus:border-neutral-300 w-full text-neutral-700 font-medium" />
      </div>

      <button className={`${ isLoading ? "opacity-50 cursor-auto" : "bg-neutral-950 cursor-pointer hover:opacity-75" } opacity-100 text-white text-sm font-semibold uppercase py-3.5 px-4 rounded-sm mb-0`} onClick={handleFormSubmit}>{ isFinished ? "Success" : isLoading ? "Loading..." : "Log In" }</button>
  </>
  )
}

export default Form;