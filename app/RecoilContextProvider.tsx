'use client'

import {atom, RecoilRoot} from 'recoil'

export const modalState = atom({
    key: 'modalState',
    default: false,
  });

  export default function RecoidContextProvider({ children }: { children: React.ReactNode }) {
    return <RecoilRoot>{children}</RecoilRoot>}
