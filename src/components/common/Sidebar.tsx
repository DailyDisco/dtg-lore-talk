import Link from "next/link";

const Sidebar = () => {
  return (
    <main>
      <div>
        <ul className="list-none">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href={"/messages"}>Messages</Link>
          </li>
          <li>
            <Link href={""}>Test</Link>
          </li>
          <li>
            <Link href={""}>Test</Link>
          </li>
          <li>
            <Link href={""}>Test</Link>
          </li>
          <li>
            <Link href={""}>Test</Link>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Sidebar;
