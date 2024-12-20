'use client'

import { useCompose } from "@/hooks/components/compose"
import { useToggleVisible } from "@/hooks/display/toggleVisible"
import { DetailedHTMLProps, forwardRef, HTMLAttributes, ReactNode } from "react"
import { Button } from "../Button"


export type DrawerRef = {
    isOpen: boolean
    open: () => void
}

type DrawerI = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    title: ReactNode | string
    CloseBtnDisplay?: ReactNode
    position?: 'right' | 'left'
    drawerClass?: string
    footer: (values?: { CloseButton: ReactNode }) => ReactNode | null
}

export const Drawer = forwardRef<DrawerRef, DrawerI>(({
    title,
    CloseBtnDisplay,
    position = 'right',
    drawerClass,
    children,
    footer
}, ref) => {
    const { isOpen, toggle } = useToggleVisible()

    const open = () => {
        toggle()
    }

    const values: DrawerRef = {
        isOpen,
        open
    }

    const close = () => {
        toggle()
    }
    const positionClass = {
        'right': '',
        "left": 'left'
    }

    useCompose<DrawerRef>({ ref, value: values })

    return <>
        {isOpen && <div className={"drawer " + positionClass[position] + drawerClass}>
            <div className="drawer__overlay" onClick={close}></div>
            <div className={"drawer__content"}>
                <div className="drawer__title">
                    <div>{title}</div>
                    <Button onClick={close} className="btn-ghost btn-circle">{CloseBtnDisplay || 'x'}</Button>
                </div>
                <div className="drawer__body">
                    {children}
                </div>
                <div className="drawer__footer">
                    {footer ? footer({ CloseButton: <Button onClick={close}>Close</Button> }) : <>

                        <Button onClick={close}>Close</Button>
                    </>}
                </div>
            </div>
        </div>}

    </>
})

Drawer.displayName = "Drawer"