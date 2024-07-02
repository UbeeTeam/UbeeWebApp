
import type { Ref } from "vue";

export interface ModalContentInfo {
    template?: Ref,
    content: Ref,
    templateProps?: templateProps,
    contentProps?: Object,
}

export interface templateProps {
    title: string,
    nextButtonText: string,
}