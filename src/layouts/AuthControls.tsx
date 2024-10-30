import './AuthControls.css';
import { Bell } from 'lucide-react';
import { ComponentProps, useState } from 'react';
import { Button } from '../components/Button';

export type AuthControlsProps = ComponentProps<'ul'> & {
  openMenu: boolean;
};

export default function AuthControls(props: AuthControlsProps) {
  const [isAuth, setAuth] = useState(false);

  if (isAuth) {
    return <UserMenu {...props} />;
  }

  return <LoginMenu {...props} />;
}

function LoginMenu(props: AuthControlsProps) {
  return (
    <ul
      id="menuList"
      className={`flex flex-shrink-0 gap-4 sm:gap-2 items-center ${
        props.openMenu ? 'open' : ''
      }`}
    >
      <li>
        <Button variant="outline" href="/sign-up">
          Sign Up
        </Button>
      </li>
      <li>
        <Button>Sign In</Button>
      </li>
    </ul>
  );
}

function UserMenu(props: AuthControlsProps) {
  return (
    <ul
      id="menuList"
      className={`flex flex-shrink-0 gap-4 sm:gap-2 items-center ${
        props.openMenu ? 'open' : ''
      }`}
    >
      <li>
        <button className="page-header-notifications p-2 rounded-full text-blue-800 hover:bg-blue-200">
          <Bell />
        </button>
      </li>
      <li>
        <button className="page-header-avatar text-blue-800">
          <div className="flex h-full bg-blue-200 rounded-full overflow-hidden items-center justify-center">
            <span>I</span>
          </div>
        </button>
      </li>
    </ul>
  );
}
