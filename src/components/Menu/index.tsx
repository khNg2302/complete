'use client'

import { FC, Ref } from "react"
import { Drawer, DrawerRef } from "../providers/Drawer"

interface MenuI {
    ref: Ref<DrawerRef>
}


export const Menu: FC<MenuI> = ({ ref }: MenuI) => {

    return <Drawer footer={() => null} CloseBtnDisplay={<></>} ref={ref} title='Menu' position="left" drawerClass=" menu">

    </Drawer>
}