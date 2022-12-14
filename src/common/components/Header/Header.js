import Link from 'next/link'

export const Header = () => {
  return (
    <header
        className="container relative z-50 flex flex-row items-center justify-between w-full px-4 mx-auto xl:top-4 md:px-0"
    >
      <div>
        <img src="/assets/logo.svg" alt="NFT Marketplace logo" />
      </div>
      <div className="flex flex-row items-center justify-between">
        <nav className="hidden text-lg font-medium text-white lg:block">
          <Link href="/#">
            <a className="py-2 border-b text-primary">Explore</a>
          </Link>
          <Link href="/#">
            <a className="py-2 mx-16 hover:border-b hover:text-primary">
              Creators
            </a>
          </Link>
          <Link href="/#">
            <a className="py-2 transition hover:border-b hover:text-primary">
              Community
            </a>
          </Link>
        </nav>
        <Link href="/#">
          <a className="px-8 py-4 ml-40 text-lg font-semibold border bg-skin/10 text-primary border-primary font-oxanium">
            Connect Wallet
          </a>
        </Link>
      </div>
    </header>
  );
}