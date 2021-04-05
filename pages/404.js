import Link from "next/link";
import router from "next/router";
import { useEffect } from "react";

const NotFoundPage = () => {
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 10000);
  }, []);

  return (
    <div>
      <h1>Oops!</h1>
      <h2>The page you were looking for does not exist</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a className="link link-regular">Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
