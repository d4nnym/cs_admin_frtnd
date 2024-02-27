'use client'

import {SessionProvider} from 'next-auth/react'

export default function Admin({children}) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider> 
  );
}