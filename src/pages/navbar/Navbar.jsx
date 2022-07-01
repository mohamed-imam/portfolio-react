import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className='nav'>
      <Link to='/' className='site-title'>
        Products
      </Link>
      <ul>
        <Link to='/about'>About</Link>
        <Link to={"/todo"}>Todo</Link>
        <Link to='/products'>Shop</Link>
        <Link to='/counter'>Counter</Link>
        <Link to='/login'>Login</Link>
      </ul>
    </nav>
  );
}
