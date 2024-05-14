"use client"

import Button, { ButtonProps} from "@leafygreen-ui/button";

interface DocButtonProps extends ButtonProps {
    text: string
}

export const DocsButton = ({ text, ...rest }: DocButtonProps) => (
    <Button {...rest}>
        { text }
    </Button>
)