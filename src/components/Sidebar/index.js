import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faShop } from '@fortawesome/free-solid-svg-icons';
import Menu from '~/components/Menu';
import routes from '~/config/routes';
import { deleteCookie } from '~/ultils/cookie';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('logo')}>
                <span>
                    Phone
                    <span>Land</span>
                </span>
            </div>
            <div className={cx('menu')}>
                <Menu />
                <div className={cx('logout')}>
                    <Link
                        to={routes.login}
                        onClick={() => {
                            deleteCookie('login');
                        }}
                    >
                        <span>Đăng Xuất </span>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    </Link>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
