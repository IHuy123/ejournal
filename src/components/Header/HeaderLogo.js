import { Link } from "react-router-dom";

export default function HeaderLogo() {
  return (
    <div className="logo pull-left">
      <Link to="/">
        eJounal
        {/* <img src="/images/Logo.jpg" alt="Go to homepage" /> */}
      </Link>
    </div>
  );
}
