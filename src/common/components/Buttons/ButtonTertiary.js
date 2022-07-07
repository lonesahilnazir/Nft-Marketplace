import Link from "next/link";

export const ButtonTertiary = ({ text, link }) => {
  return (
    <Link href={link}>
      <a className="px-12 py-4 text-2xl font-medium text-[#F5FBF2] border bg-transparent border-primary font-workSans hover:-translate-y-1 hover:shadow-lg transition duration-300">
        {text}
      </a>
    </Link>
  );
};
