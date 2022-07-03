import Link from "next/link";

const ButtonPrimary = ({ text, link }) => {
  return (
    <Link href={link}>
      <a className="px-12 py-4 text-2xl font-semibold text-black border bg-primary border-primary font-workSans">
        {text}
      </a>
    </Link>
  );
};

const ButtonSecondary = ({ text, link }) => {
  return (
    <Link href={link}>
      <a className="px-12 py-4 text-2xl font-semibold text-white border bg-skin/10 border-primary font-workSans">
        {text}
      </a>
    </Link>
  );
};

export { ButtonPrimary, ButtonSecondary };
