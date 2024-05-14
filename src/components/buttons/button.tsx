"use client"

import Button, { ButtonProps} from "@leafygreen-ui/button";

interface DocButtonProps extends ButtonProps {
    text: string
}

export const DocsButton = ({ text }: DocButtonProps) => (
    <Button>
        { text }
    </Button>
)