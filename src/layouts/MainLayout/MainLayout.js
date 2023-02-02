import Header from '../Components/Header';
import SideBar from '../Components/SideBar';
import classNames from 'classnames/bind';
import styles from './MainLayout.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
function MainLayout({ children }) {
    // console.log(children);
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainLayout;
