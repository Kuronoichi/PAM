import {IUser} from "../@types/pc/user";
import {createContext} from "react";

type UserState = [IUser | null, boolean, () => Promise<void>]

export const UserContext = createContext<UserState>([null, false, async () => {}])
