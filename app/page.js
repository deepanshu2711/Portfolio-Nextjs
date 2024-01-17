import HeaderSeaction from '@/components/HeroSection'
import Navbar from '@/components/navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
    <container className=" container mx-auto
    px-12 py-4">
    <Navbar />
    <HeaderSeaction />
    </container>
    </main>
  )
}
