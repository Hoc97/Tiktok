import classNames from 'classnames/bind';
import Button from '~/component/Button';
import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1675648800&x-signature=mvlI06mIAxhCN2qqjBlo9tgXwKE%3D"
                    alt=""
                />
                <Button primary>Follow</Button>
            </header>
            <div className={cx('item-info')}>
                <h4 className={cx('nickname')}>
                    <strong>nickname</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <p className={cx('username')}>nickname</p>
            </div>
            <p className={cx('analytics')}>
                <strong className={cx('value')}>8.2M</strong>
                <span className={cx('label')}>Followers</span>
                <strong className={cx('value')}>670.5M</strong>
                <span className={cx('label')}>Likes</span>
            </p>
        </div>
    );
}

export default AccountPreview;
