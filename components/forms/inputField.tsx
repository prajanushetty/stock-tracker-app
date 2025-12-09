import { cn } from "@/lib/utils"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

const inputField = ({name, label, placeholder, type="text", register, validation, disabled, value, error}:FormInputProps) => {
  return (
    <div className="space-y-2">
        <Label htmlFor={name} className="form-label">{label}</Label>
        <Input type={type} 
            id={name} 
            placeholder={placeholder} 
            value={value} 
            className={cn('form-input',{'opacity-50 cursor-not-allowed':disabled})}
            disabled={disabled}
            {...register(name,validation)}
        />
        {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  )
}

export default inputField
