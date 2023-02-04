// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div>
            <Tippy
                interactive
                // visible
                delay={[1000, 0]}
                placement="bottom-start"
                offset={[-10, 0]}
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <AccountPreview />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/5d433705fd675541ead32d4bbb4ec7bb.jpeg?x-expires=1675584000&x-signature=8kZk2WEajGbKXR%2BrIthxQhV9qu8%3D"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <h4 className={cx('nickname')}>
                            <strong>nickname</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </h4>
                        <p className={cx('username')}>nickname</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    // children: PropTypes.string.isRequired,
};

export default AccountItem;
