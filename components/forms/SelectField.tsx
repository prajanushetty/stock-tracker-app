import { Label } from "@radix-ui/react-label"
import Image, { StaticImageData } from "next/image"
import { Controller } from "react-hook-form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

export type SelectOption = {
  value: string
  label: string
  flag?: string | StaticImageData
}

const SelectField = ({name, label, placeholder, options, control, error, required=false}:SelectFieldProps) => {
    const isCountry=options.some(option=>option?.flag);

  return (
    <div className="space-y-2">
        <Label htmlFor={name} className="form-label">{label}</Label>
        <Controller
            name={name}
            control={control}
            rules={{
                required:required ? `Please select ${label.toLowerCase()}`: false,
            }}
            render={({field})=>
            (
                <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="select-trigger">
                        <SelectValue placeholder={placeholder}/>
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-grey-600 text-white">
                        {options.map((option)=>
                        (
                            <SelectItem key={option.value} value={option.value}>
                                 <div className="flex items-center gap-2">
                                    {isCountry && option.flag && (
                                    <Image
                                        src={option.flag}
                                        alt={option.label}
                                        className="h-4 w-6"
                                        width={24}
                                        height={16}
                                    />
                                    )}
                                    <span className="truncate">{option.label}</span>
                                </div>
                            </SelectItem>
                        )
                        )}
                    </SelectContent>
                    {isCountry && <span className="text-sm text-gray-500">Helps us show market data and news relevant to you</span>}
                 {error && <p className="text-sm text-red-500">{error.message}</p>}
                </Select>
            )}
        />
    </div>
  )
}

export default SelectField