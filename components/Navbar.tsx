import Link from "next/link"
import Image from 'next/image'
import { NAV_LINKS } from "@/constants"



const Navbar = () => {
    return (
        <nav className=" flexBetween max-container padding-container relative z-30 py-5 ">
            <Link href='/'>
                <Image src='/logo.png' alt='logo' width={120} height={29} className="scale-150" />
            </Link>
            <ul className="hidden h-full gap-6 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href}  key={link.key} className="text-sm font-semibold text-gray-600 flexCenter cursor-pointer pt-0.5 transition-all hover:text-gray-900">
                        {link.label}
                    </Link>
                ))}
            </ul>

            <Image src="icons/menu.svg" alt='menu' width={32} height={32} className="inline-block cursor-pointer lg:hidden "/>

        </nav>
    )
}

export default Navbar
