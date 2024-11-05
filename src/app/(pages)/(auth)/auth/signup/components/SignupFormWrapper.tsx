"use client";
import React, { useRef } from 'react'

// Component Imports 
import AnimateOnScroll from '@/~/libs/components/global/AOS/AnimateOnScroll';
import SignupFormContent from './SignupFormContent';

const SignupFormWrapper = () => {
  const ref = useRef(null);
  return (
  <>
      <section ref={ref} className="w-full pt-16 px-7 pb-12 bg-white">
        <div className="max-w-[1200px] relative mr-auto ml-auto">
          <AnimateOnScroll
          refElement={ref}
          duration={0.2}
          once
          originalScale={0.97}
          >
            <SignupFormContent />
          </AnimateOnScroll>
        </div>
      </section>
  </>
  )
}

export default SignupFormWrapper;