import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";

export type ButtonI = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button = forwardRef<HTMLButtonElement, ButtonI>(({ children, className='btn-default', ...res }, ref) => {
    return <button ref={ref} className={"btn " + className} {...res}>
        {children}
    </button>
})

Button.displayName = " Button"