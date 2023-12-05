import { ReactNode } from "react";

export interface IRepo {
    name: ReactNode;
    id: number;
    full_name: string;
    owner: {
        avatar_url: string;
    }
}