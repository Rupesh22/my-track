import { useSession } from "next-auth/client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const [session] = useSession();
  const [expand, setExpand] = useState(false);
  const router = useRouter();
  const navItems = [
    { pageLink: "/", displayName: "Home" },
    { pageLink: "/todo", displayName: "Todo" },
    { pageLink: "/bucketList", displayName: "Bucket list" },
    { pageLink: "/songs", displayName: "Songs" },
    { pageLink: "/travelList", displayName: "Travel list" },
    { pageLink: "/movieWatchlist", displayName: "Movie watch list" },
    { pageLink: "/save", displayName: "Save" },
  ];

  //TODO: transistions when menu expanded

  const handleClick = () => {
    setExpand(!expand);
  };

  if (!session) {
    return <div>{children}</div>;
  }

  return (
    <div>
      <div className="nav-container">
        <h3>my-trak</h3>
        <h3 style={{ cursor: "pointer" }} onClick={handleClick}>
          {expand ? "close" : "Menu"}
        </h3>
      </div>
      <div>
        {expand ? (
          <ul className="nav-items nav-stagger">
            {navItems.map((item, index) => {
              return (
                <li key={index} className="nav-item">
                  <Link href={item.pageLink}>
                    <a
                      onClick={handleClick}
                      className={
                        router.pathname === item.pageLink ? "active" : ""
                      }
                    >
                      {item.displayName}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <ul></ul>
        )}
      </div>
      {children}
    </div>
  );
};

export default Layout;
