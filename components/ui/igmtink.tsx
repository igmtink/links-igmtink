import Link from 'next/link'

export const LinkBio: React.FC<{
  href: string
  children: React.ReactNode
}> = ({ href, children }) => {
  return (
    <Link
      className="w-full flex items-center justify-center gap-2 font-bold bg-zinc-800 hover:bg-zinc-800/50 transition-colors rounded-md border border-zinc-700 py-4"
      href={href}
    >
      {children}
    </Link>
  )
}
