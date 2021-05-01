import Link from 'next/link';
import { useEffect } from 'react';
import navStyles from '../styles/Nav.module.css';

const Nav: React.FC = () => {
  useEffect(() => {
    console.log('Nav componentDidMount');
  }, []);

  console.log('Render Nav');

  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
