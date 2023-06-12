import classNames from 'classnames/bind';

import RankingItem from './RankingItem';
import styles from './Ranking.module.scss';

import { topprice } from '~/ultils/services/userService';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const datas = [
    {
        user: 'Van Duc',
        price: 1000,
    },
    {
        user: 'Van Duc',
        price: 900,
    },
    {
        user: 'Van Duc',
        price: 800,
    },
    {
        user: 'Van Duc',
        price: 700,
    },
    {
        user: 'Van Duc',
        price: 600,
    },
];

function Ranking({ title }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await topprice();
            setUsers(response.data);
        };
        fetchData();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>{title}</div>
            <div className={cx('children')}>
                <div>
                    <p>#</p>
                    <p>User Name</p>
                    <p>Tổng Tiền</p>
                </div>
                <div>
                    {users.map((data, index) => {
                        return (
                            <RankingItem
                                key={index}
                                top={index + 1}
                                user={data.username}
                                price={new Intl.NumberFormat('vi-VN').format(data.total_amount) + 'đ'}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Ranking;
