import { NotFoundException } from "~~/utils/exceptions"

/**
 * For all undefined routes we are returning an error
 */
export const UnknownRoutesHandler = () => {
    throw new NotFoundException("The resource doesn't exist");
}