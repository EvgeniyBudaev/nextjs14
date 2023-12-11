"use client";

import { useFormState } from "react-dom";
import {simpleAction} from "@/app/simpleAction";

export const SimpleForm = () => {
    const initialState = {
        message: null,
    };
    const [state, formAction] = useFormState(simpleAction, initialState);

    return (
// Type (payload: FormData) => void is not assignable to type string |
// DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS] | undefined
    <form action={formAction}>
            <input name="simple" type="text" value="simple" />
        </form>
    )
}