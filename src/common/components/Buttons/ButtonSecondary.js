import Link from "next/link";

export const ButtonSecondary = ({ text, link }) => {
  return (
    <Link href={link}>
      <a className="px-12 py-4 text-2xl font-semibold text-white border bg-[#E9D7A710] border-primary font-workSans hover:-translate-y-1 hover:shadow-lg transition duration-300">
        {text}
      </a>
    </Link>
  );
};
