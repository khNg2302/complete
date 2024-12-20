'use client'

import { Ref, useImperativeHandle } from "react"

interface UseComposeI<ref> {
    ref: Ref<ref>
    value: ref
}

export const useCompose = <ref,>({ ref, value }: UseComposeI<ref>) => {

    useImperativeHandle(ref, () => {
        return value

    },[value])
}