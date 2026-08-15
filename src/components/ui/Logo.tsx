import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="font-display-lg text-display-lg font-bold text-primary dark:text-secondary-fixed-dim tracking-tight flex items-center gap-2 group scale-95 transition-transform duration-200 hover:scale-100"
    >
      <Image
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_p9qbYdN0hrmbxhtTD4yGmCqJKyyRFzQejmp7m30RhM9ocjA4nfqC64jPXgbD27IlDRH3_km8VgXWW7EfqfoeiOAJ0WPWIuGGa4ZglLFngCuYd5lj7uH1-xp5I8YBYj29lgBQerSj4jRVBGWs99Xi94bRjU81kGkR0yA49mV1uYDdY0ZRCuirnufmLlvinCpQXF3mffttYsp0JLVXArD3Nc_Ph10u94eptijAOoh0c2vdv2bjDOf1z_scz98mNJXou84"
        alt="Alazzeh International Logo"
        width={48}
        height={48}
        className="h-12 w-auto object-contain"
        unoptimized
      />
      <span className="block">Alazzeh International</span>
    </Link>
  );
}
