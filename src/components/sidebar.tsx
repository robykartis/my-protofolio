import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface Props {

}

interface ItemsProps {
    href?: string
    text?: string
}
const Item = ({ href = '/', text = 'Link' }: ItemsProps) => (
    <Link href={href}
        className='px-4 py-2 text-zinc-900 hover:bg-zinc-100 rounded-md'
    >
        {text}
    </Link>
)

const Sidebar = ({ }: Props) => {
    return (
        <div className='flex flex-col w-[231px] gap-[11px]'>
            <Image alt='logo' width={54} height={54} src='/img/logo/pizza.png' />
            <div className="flex flex-col">
                <Item href={"/"} text="Home" />
                <Item href={"/about"} text="About" />
                <Item href={"/blog"} text="Blog" />
                <Item href={"/guestbook"} text="Guest Book" />
            </div>
        </div>
    )
}

export default Sidebar