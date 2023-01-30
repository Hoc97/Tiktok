import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9082bd77d9ecfd3a354ad3d8832c6aef~c5_300x300.webp?x-expires=1674986400&x-signature=i3BS3%2FpnqoQi6U3KJjVvIKZSO2s%3D"
        alt="Hoa"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          Nguyen Van A
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <p className={cx('username')}>nguyenvana</p>
      </div>
    </div>
  );
}

export default AccountItem;
