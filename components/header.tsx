import Image from 'next/image'

const Header: React.FC = () => {
  return (
    <section className="p-4 text-center">
      <Image
        className="rounded-full border border-zinc-700 mx-auto mb-4"
        src="/igmtink.jpg"
        width={100}
        height={100}
        alt="Igmtink Profile Pic"
      />
      <div>
        <h1 className="font-bold mb-2 font-['Anton'] text-2xl">
          IVAN GREGOR TABALNO
        </h1>
        <h2 className="text-orange-500">Full Stack Website Developer</h2>
        <h3 className="text-orange-500">GFX Designer</h3>
      </div>
    </section>
  )
}

export default Header
