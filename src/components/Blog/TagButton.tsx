const TagButton = ({ href = "#0", text }: { href?: string; text: string }) => {
  return (
    <a
      href={href}
      className="bg-gray-light mb-3 mr-3 inline-flex items-center justify-center rounded-sm px-4 py-2 text-sm text-black duration-300 hover:bg-orange-500 hover:text-white dark:bg-[#2C303B] dark:text-white dark:hover:bg-orange-500"
    >
      {text}
    </a>
  );
};

export default TagButton;
