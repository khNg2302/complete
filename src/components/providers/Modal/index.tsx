'use client'
import { FC, forwardRef, ReactNode } from "react"
import { Button, ButtonI } from "../Button"
import { useToggleVisible } from "@/hooks/display/toggleVisible"
import { useCompose } from "@/hooks/components/compose"

interface ModalI {
    title: string
    onClose?: () => void
    onOK?: () => void
    children: (params: unknown) => ReactNode
}

export type ModalRef = {
    isOpen: boolean
    open: () => void
    CloseButton: FC<ButtonI>,
    OKButton: FC<ButtonI>
}

export const Modal = forwardRef<ModalRef, ModalI>(({ title, onClose, onOK, children }, ref) => {

    const { isOpen, toggle } = useToggleVisible()

    const open = () => {
        toggle()
    }


    const close = () => {
        if (onClose) {
            onClose()
        }
        toggle()
    }

    const ok = () => {
        if (onOK) {
            onOK()
        }
        toggle()
    }

    const CloseButton: FC<ButtonI> = ({ children, className = 'btn-default', ...res }) => <Button {...res} className={className} onClick={close}>{children || 'Close'}</Button>
    const OKButton: FC<ButtonI> = ({ children, className = 'btn-primary', ...res }) => {
        return <Button {...res} className={className} onClick={ok}>{children || 'OK'}</Button>
    }

    const values: ModalRef = {
        isOpen,
        open,
        CloseButton: CloseButton,
        OKButton: OKButton
    }

    useCompose({ ref, value: values })

    return (
        <>
            {isOpen && <div className="modal">

                <div className="modal__overlay" onClick={toggle}></div>
                <div className="modal__content">
                    <div className="modal__title">
                        <h1>{title}</h1>
                        <CloseButton className="btn-ghost btn-circle">x</CloseButton>
                    </div>
                    <div className="modal__body">
                        {
                            children(values)
                        }
                    </div>
                    <div className="modal__footer">
                        <CloseButton>Close</CloseButton>
                        <OKButton />
                    </div>
                </div>

            </div>}
        </>

    )
})

Modal.displayName = "Modal"