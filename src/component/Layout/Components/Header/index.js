import { Fragment, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faSignIn,
  faEllipsisVertical,
  faEarthAmericas,
  faCircleQuestion,
  faKeyboard,
  faMoon,
  faPlus,
  faUser,
  faCoins,
  faGear,
  faVideoCamera,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from '~/component/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItem from '~/component/AccountItem';
import Menu from '~/component/Popper/Menu';
import { Inbox, Messages } from '~/component/Icons';
import Image from '~/component/Image';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAmericas} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vn',
          title: 'Tiếng việt',
        },
        {
          type: 'language',
          code: 'cn',
          title: 'China',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
  {
    icon: <FontAwesomeIcon icon={faMoon} />,
    title: 'Dark mode',
  },
];

const userMenu = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: 'View profile',
    to: '/@beohzz',
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: 'Get Coins',
    to: '/coin',
  },
  {
    icon: <FontAwesomeIcon icon={faVideoCamera} />,
    title: 'LIVE Studio',
    to: '/studio',
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: 'Settings',
    to: '/setting',
  },
  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: 'Log out',
    to: '/logout',
    separate: true,
  },
];
function Header() {
  const currentUser = true;

  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  });

  //Handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        //Handle change language
        break;
      default:
    }
  };
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok" />
        </div>
        <HeadlessTippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search accounts and videos" spellCheck={false} />
            {/* <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>
        <div className={cx('action')}>
          {currentUser ? (
            <>
              <Button upload leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                <span>Upload</span>
              </Button>
              <Tippy content="Messages" placement="bottom">
                <button className={cx('action-btn', 'message')}>
                  <Messages height="26" width="26" />
                </button>
              </Tippy>
              <Tippy content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <Inbox />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button upload leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                <span>Upload</span>
              </Button>
              <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                Log in
              </Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                alt="Cao Thai Hoc"
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/defd3bdc089ba16e554de81098a19d4d~c5_720x720.jpeg?x-expires=1675184400&x-signature=9kyH61igszknIOk%2Fagh2n2sbYYg%3D"
                fallback="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/b4c943d022d093e39a7d76902a928d00~c5_100x100.jpeg?x-expires=1675234800&x-signature=XRv44ZGHOiuVpvXU2fvyyJyQpRs%3D"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
