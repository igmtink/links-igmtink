import { LinkBio } from './ui/igmtink'
import { AiFillYoutube, AiFillInstagram, AiFillGithub } from 'react-icons/ai'
import { FaTiktok } from 'react-icons/fa'
import Image from 'next/image'

const SocialMedia: React.FC = () => {
  return (
    <section className="px-14 py-4 grid grid-cols-1 gap-2">
      <LinkBio href="https://www.igmt.ink/">
        <Image src="/favicon.png" width={24} height={24} alt="Igmtink Logo" />
        igmt.ink
      </LinkBio>
      <LinkBio href="https://www.youtube.com/@igmtink">
        <AiFillYoutube className="text-2xl text-red-500" />
        @igmtink
      </LinkBio>
      <LinkBio href="https://www.instagram.com/igmtink">
        <AiFillInstagram className="text-2xl text-[#fa7e1e]" />
        @igmtink
      </LinkBio>
      <LinkBio href="https://www.github.com/igmtink">
        <AiFillGithub className="text-2xl text-white" />
        @igmtink
      </LinkBio>
      <LinkBio href="https://www.tiktok.com/@igmtink">
        <FaTiktok className="text-2xl text-black" />
        @igmtink
      </LinkBio>
    </section>
  )
}

export default SocialMedia
