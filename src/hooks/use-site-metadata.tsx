import { snootyEnv } from "@/types/site-metadata"

export const useSiteMetadata = (): {
    snootyEnv: snootyEnv
} => {
    return {
        snootyEnv: "development" // mocking the value for now
    }
}