import Link from "next/link";

interface LogoProps {
    className: string;
}

export default function Logo( { className }: LogoProps) {
    return <Link href="/" className={`${className} lg:text-lg text-[16px] font-semibold`}>agromarket</Link>
}