import Image from "next/image"
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

const navBarButton = "bg-[#686868] py-0 px-3 rounded-sm text-white"
const navBarItem = "group text-white gap-2 data-[focus]:bg-[#383838] px-4 py-2 hover:border-b-2 hover:border-[#fff] border-b-2 border-[#383838] transition-all duration-200"
const navBarMenu = "lg:flex hidden flex-row text-white gap-4"
const navBarHamburger = "block lg:hidden text-[#1f1f1f] h-[40px] w-[40px] p-2 border-2 border-[#1f1f1f] rounded-sm"
const navMenu = "text-[#1f1f1f] border-b-2 border-white hover:border-[#fe0100] px-4 py-2 transition-all duration-6000"
const links = {
    "Usefull Links": [
        { href: '/Installation-Docs', label: 'Installer Docs' },
        { href: '/Privacy-Policy', label: 'Legal Docs' },
        { href: '/Contact-Us', label: 'Contact Us' },
    ],
    "Dashboard": [
        { href: '/Login', label: 'Login' },
        { href: '/Reset-Password', label: 'Reset Password' },
    ]
}

export function NavBar() {
    return (
        <>
            <div className="w-full bg-[#383838]">
                <div className="flex align-center justify-between max-w-[1200px] mx-auto px-5 py-1">
                    {Object.entries(links).map(([key, items]) => (
                        <span key={key}>
                            <Menu>
                                <MenuButton className={navBarButton}>{key}</MenuButton>
                                <Transition
                                    enter="transition ease-out duration-75"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <MenuItems
                                        anchor="bottom start"
                                        className="bg-[#383838] mt-2 rounded-sm"
                                    >
                                        {items.map((link) => (
                                            <MenuItem key={link.href}>
                                                <Link href={link.href}><div className={navBarItem}>{link.label}</div></Link>
                                            </MenuItem>
                                        ))}
                                    </MenuItems>
                                </Transition>
                            </Menu>
                        </span>
                    ))}
                </div>
            </div>
            <div className="w-full shadow-lg bg-white">
                <div className="flex align-center justify-between max-w-[1200px] mx-auto px-5 py-0">
                    <span className="navBar-Menu">
                        <Link href="/">
                            <Image
                                src="/Images/Logo/Logo_White.png"
                                alt="Hosting Provider Logo"
                                width={250}
                                height={500}
                                quality={100}
                                className="min-w-[250px] h-[50px] p-1"
                            />
                        </Link>
                    </span>
                    <span className="flex flex-row justify-center items-center gap-4">
                        <ul className={navBarMenu}>
                            <Link href="/WhmcsModules"><li className={navMenu}>WHMCS Modules</li></Link>
                            <Link href="/Shared-License"><li className={navMenu}>Shared License</li></Link>
                            <Link href="/Shared-Hosting"><li className={navMenu}>Shared Hosting</li></Link>
                            <Link href="/Reseller-Hosting"><li className={navMenu}>Reseller Hosting</li></Link>
                        </ul>
                        <GiHamburgerMenu className={navBarHamburger} />
                    </span>
                </div>
            </div>
        </>
    )
}