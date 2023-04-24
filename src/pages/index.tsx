import {Inter} from 'next/font/google'
import {signIn} from "next-auth/react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} text-white`}
    >
      <button onClick={() => signIn('todoist')}>Sign in</button>
    </main>
  )
}
