import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const modal = defineStyle({
    fontSize: "13px",
    fontWeight: "500",
    lineHeight: "23px",
    border: "1px solid rgba(130, 143, 163, 0.25)",
    bg: "inherit",
})

export const textareaTheme = defineStyleConfig({
  variants: { modal },
})