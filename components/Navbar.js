import Link from 'next/link';

import Button from './Button';

const Navbar = ({onTop}) => {
  return ( 
    <header>
      <nav className={"bg-white flex justify-between items-center px-36 py-4 transition duration-500 ease-out filter " + (onTop ? "" : "drop-shadow")}>
        <div className="left flex items-center">
          <div className="logo">
            <h1 className="font-medium text-2xl tracking-wide">OWENLTM</h1>
          </div>
        </div>
        <div className="right">
          <Button customClass="box border border border-black bg-white hover:bg-black hover:text-white">
            <Link href="/#contact"><a>Contact me</a></Link>
          </Button>
        </div>
      </nav>
    </header>
   )
}
 
export default Navbar;