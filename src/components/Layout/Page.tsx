'use client'

import { FC, ReactNode, useRef } from "react"
import { DrawerRef } from "../providers/Drawer"
import { Menu } from "../Menu"
import { Button } from "../providers/Button"

interface PageLayoutI {
    children: ReactNode
}

export const PageLayout: FC<PageLayoutI> = ({ children }) => {

    const menuRef = useRef<DrawerRef>(null)

    const openMenu = () => {
        menuRef.current?.open()
    }

    return <div className="w-full h-full flex p-square overflow-hidden">
        <nav>
            <Menu ref={menuRef} />
        </nav>
        <div className="flex-1 h-full flex flex-col">
            <nav className="between-row">
                <div className="row">
                    <Button onClick={openMenu} className="btn-ghost">=</Button>
                    <div>Student</div>
                </div>
                <div>User tools</div>
            </nav>
            <div className="overflow-auto flex-1">{children}</div>
        </div>
    </div>
}