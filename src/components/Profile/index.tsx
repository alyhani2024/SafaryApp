import Image from "next/image";
import Link from "next/link";

const UserProfile = () => (
  <div className="bg-gray-50/90 py-12 lg:py-24" style={{ marginTop: "100px" }}>
    <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6 text-center">
      <div className="space-y-2">
        <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto">
          <Image
            src="/images/blog/Pyramids.jpg"
            alt="Avatar"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Jane Doe</h1>
          <p className="text-gray-500 dark:text-gray-400">New York, NY</p>
        </div>
      </div>
      <div className="max-w-[600px] space-y-4 mx-auto">
        <p className="text-gray-600/strong dark:text-gray-400/strong">Designer. Coffee lover. Music enthusiast.</p>
      </div>
      <div className="grid w-full grid-cols-3 gap-2 max-w-xs items-center justify-center mx-auto">
        <Link
          className="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white shadow-sm text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50"
          href="#"
        >
          Twitter
        </Link>
        <Link
          className="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white shadow-sm text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50"
          href="#"
        >
          Facebook
        </Link>
        <Link
          className="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white shadow-sm text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50"
          href="#"
        >
          Instagram
        </Link>
      </div>
    </div>
  </div>
);

export default UserProfile;
