'use client'
import FooterLink from "@/components/forms/FooterLink";
import InputField from "@/components/forms/inputField";
import SelectField from "@/components/forms/SelectField";
import { Button } from "@/components/ui/button";
import { countryOptions, INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS } from "@/lib/constants";
import { SubmitHandler, useForm } from "react-hook-form";

//register
const SignUpPage = () => {

  const {
    register,
    handleSubmit,
    control,
    formState:{errors, isSubmitting}
  }=useForm<SignUpFormData>({
    defaultValues:{
    fullName:'',
    email:'',
    password:'',
    country:'',
    investmentGoals:'',
    riskTolerance:'',
    preferredIndustry:''
    }
  });

  const onSubmit: SubmitHandler<SignUpFormData>=(data)=>{
    console.log(data);
  }
  return (
    <>
      <h1 className="form-title">Sign Up & Personize</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <InputField name='fullName' label='Full Name' placeholder='Enter your full name' register={register} 
            error={errors.fullName} validation={{required:'Name is required', minLength:2}}/>
        <InputField name='email' label='Email' placeholder='Enter your email'
            register={register} 
            error={errors.email} 
            validation={{required:'Email is required', minLength:2,
            pattern:{
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message:"Enter valid email address"
              }
        }}/>
        <InputField name='password' label='Password' type="password" placeholder='Enter your password' register={register} //type password will hide the characters
            error={errors.password} validation={{required:'Password is required', minLength:2}}
        />
        <SelectField
            name="country" label='Country' placeholder="Select your country"
            options={countryOptions} control={control} error={errors.country} required={true}
        />
        <SelectField
            name="riskTolerance" label='Risk Tolerance' placeholder="Select your risk level"
            options={RISK_TOLERANCE_OPTIONS} control={control} error={errors.riskTolerance} required={true}
        />
        <SelectField
            name="investmentGoals" label='Investment Goals' placeholder="Select your investment goals"
            options={INVESTMENT_GOALS} control={control} error={errors.investmentGoals} required={true}
        />
        <SelectField
            name="preferredIndustry" label='Preferred Industries' placeholder="Select your preferred industry"
            options={PREFERRED_INDUSTRIES} control={control} error={errors.preferredIndustry} required={true}
        />
        <Button type="submit" disabled={isSubmitting} className="w-full yellow-btn mt-5">
          {isSubmitting ? 'Signing Up...' : 'Sign Up'}
        </Button>
        <FooterLink text="Already have an account!" linkText="Sign In" href="/sign-in" ></FooterLink>
      </form>
    </>
  )
}

export default SignUpPage