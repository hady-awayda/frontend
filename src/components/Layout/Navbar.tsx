import { getUsernameFromJWT } from "../../data/local/JWT";

const Navbar = () => {
  const username = getUsernameFromJWT();

  return (
    <>
      <nav className="flex justify-between h-10 m-20">
        <a href="/">Home</a>
        <div className="flex justify-between w-1/3">
          <a href="/login" className="w-1/4">
            Login
          </a>
          <a href="/register" className="w-1/4">
            Register
          </a>
          <a href="/profile" className="w-1/2">
            Welcome{username ? `, ${username}` : ""}
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
