const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between h-10 m-20 px-20">
        <a href="/">Home</a>
        <div className="flex justify-between w-1/3 pr-12">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
          <a href="/profile">Profile</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
