import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import styles from './SideBar.module.scss';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeIconActive,
    UserGroupIconActive,
    LiveIconActive,
} from '~/component/Icons';
import SuggestedAccount from '~/component/SuggestedAccount';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeIconActive />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupIconActive />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveIconActive />} />
            </Menu>
            <SuggestedAccount label="Suggested accounts" array={[1, 1, 1, 1, 1]} see="See all" />
            <SuggestedAccount label="Following accounts" array={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]} see="See more" />
        </aside>
    );
}

export default SideBar;
