"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const Providers = (props: Props) => {
    return
    <SessionProvider basePath="/api/auth">
        {props.children}
    </SessionProvider>
}
export default Providers