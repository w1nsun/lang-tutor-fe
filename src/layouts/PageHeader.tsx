import './PageHeader.css';
import AuthControls from './AuthControls';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PageHeader() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="page-header flex gap-10 lg:gap-10 items-center justify-between">
      <div className="page-header-logo flex gap-4 items-center flex-shrink-0">
        <Link to="/" className="flex h-full items-center">
          <h1 className="logo-text text-blue-700">LTutor</h1>
        </Link>
      </div>
      <div className="flex"></div>
      <AuthControls openMenu={openMenu} />
      <div id="menuIcon" className="flex items-center" onClick={toggleMenu}>
        <Menu />
      </div>
    </nav>
  );
}
