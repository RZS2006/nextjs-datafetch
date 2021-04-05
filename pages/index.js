import Link from "next/link";

const IndexPage = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus,
        risus eu ultrices lacinia, lorem mauris volutpat est, in ornare leo urna
        sit amet odio. Donec hendrerit facilisis elit, ut imperdiet mi elementum
        in.
      </p>
      <Link href="/posts">
        <a className="button">See all posts</a>
      </Link>
    </div>
  );
};

export default IndexPage;
