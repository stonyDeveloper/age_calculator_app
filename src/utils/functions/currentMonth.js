import { currentDate } from "./currentDate";

export const currentMonth = () => {
    return currentDate().getMonth + 1
}