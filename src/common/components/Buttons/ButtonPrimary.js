import Link from "next/link";

export const ButtonPrimary = ({ text, link }) => {
  return (
    <Link href={link}>
      <a className="px-12 py-4 text-2xl font-semibold text-black transition duration-300 border bg-primary border-primary font-workSans hover:-translate-y-1 hover:shadow-lg">
        {text}
      </a>
    </Link>
  );
};
