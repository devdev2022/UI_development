import { Link } from "react-router-dom";

interface LogoHeaderProps {
  linkText?: string;
}

export default function LogoHeader({ linkText }: LogoHeaderProps) {
  return (
    <header className="logo_header">
      <Link to="/">
        <h1>{linkText}</h1>
      </Link>
    </header>
  );
}
