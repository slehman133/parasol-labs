// components/ThemeSwitcher.tsx
import { MoonIcon } from "@/public/MoonIcon";
import { SunIcon } from "@/public/SunIcon";
import { useSwitch, VisuallyHidden, SwitchProps } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export const ThemeSwitcher = (props: SwitchProps) => {
  const { theme, setTheme } = useTheme()
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps
  } = useSwitch(props)

  useEffect(() => {
    setTheme(isSelected ? 'light' : 'dark')
  }, [isSelected, setTheme])

  return (
    <div>
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div 
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "w-8 h-8",
              "flex items-center justify-center",
              "rounded-lg bg-inherit",
            ],
          })}
        >
          {isSelected ? (<SunIcon/>) : (<MoonIcon/>)}
        </div>
      </Component>
    </div>
  )
};