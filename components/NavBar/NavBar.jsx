import Link from "next/link";

import s from "./NavBar.module.scss";

export default function NavBar() {
  return (
    <div className={s.navbar}>
      <Link href="/" className={s.link}>
        Main
      </Link>
      <Link href="/users" className={s.link}>
        Users
      </Link>
    </div>
  );
}
