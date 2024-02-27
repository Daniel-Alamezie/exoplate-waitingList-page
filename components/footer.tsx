
import Link from "next/link";

const Footer = () => {
  const date = new Date();

  return (
    <div>
      <footer className="bg-[#292D32] dark:bg-[#212529]">
        <div className="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center">
                <span className=" antialiased self-center text-2xl font-bold whitespace-nowrap dark:text-[#E9ECEF] text-[#ffff]">EXOPLATE</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold  uppercase dark:text-[#E9ECEF] text-[#ffff] antialiased">Resources</h2>
                <ul className="space-y-4 font-medium text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <Link href="/" className="hover:underline">Exoplate</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold  uppercase dark:text-[#E9ECEF] text-[#ffff] antialiased">Follow Us</h2>
                <ul className="space-y-4 font-medium text-gray-500 dark:text-gray-400"> {/* Add space-y-4 for vertical spacing */}
                  <li className="mb-4">
                    <Link href="https://www.instagram.com/exoplate/" className="hover:underline">Instagram</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="https://twitter.com/ExoplateShop" className="hover:underline">Twitter</Link>
                  </li>
                  <li>
                    <Link href="https://www.tiktok.com/@exoplate" className="hover:underline">TikTok</Link>
                  </li>
                </ul>
              </div>

            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              &copy; {date.getFullYear()}
              <Link href="/" className="hover:underline"> Exoplate™</Link>. All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              {/* add extra footer links here  */}
            </div>
          </div>
        </div>
      </footer>

    </div>


  );
}

export default Footer;