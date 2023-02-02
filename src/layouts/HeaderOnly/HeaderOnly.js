import Header from '../Components/Header';
import classNames from 'classnames/bind';
import styles from '../MainLayout/MainLayout.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
function HeaderOnly({ children }) {
    // console.log(children);
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}
HeaderOnly.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderOnly;
