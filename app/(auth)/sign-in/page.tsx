'use client'
import FooterLink from "@/components/forms/FooterLink";
import InputField from "@/components/forms/inputField";
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";


const SignInpage = () => {
  const {
  register,
  handleSubmit,
  formState:{errors, isSubmitting}}
  =useForm<SignInFormData>({
    defaultValues:{
    email:'',
    password: ''
    },
    mode:'onBlur'
  });

  const onSubmit:SubmitHandler<SignInFormData>=(data)=>{
    console.log(data);
  }

  return (
    <>
    <div className="mt-15">
        <h1 className="form-title">Welcome Back</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <InputField name='email' label='Email' placeholder='Enter your email' type="email"
                  register={register} 
                  error={errors.email} 
                  validation={{required:'Email is required', minLength:2,
                  pattern:{
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message:"Enter valid email address"
                    }
          }}/>
          <br></br>
          <InputField name='password' label='Password' type="password" placeholder='Enter your password' register={register} //type password will hide the characters
              error={errors.password} validation={{required:'Password is required', minLength:2}}
          />
          <Button type="submit" disabled={isSubmitting} className="w-full yellow-btn mt-5">
            {isSubmitting ? 'Signing In...' : 'Sign In'}
          </Button>
        </form>
        <FooterLink text="Don't have an account?" linkText="Create an account" href="/sign-up" />
    </div>
      </>
  )
}

export default SignInpage