import classNames from 'classnames/bind';

import Table from '~/components/Table';
import RecentOrders from '~/components/Table/RecentOrders';
import Cards from '~/components/Cards';
import Ranking from '~/components/Ranking';
import CustomerReview from '~/components/CustomerReview';
import styles from './Home.module.scss';
import { getCookie } from '~/ultils/cookie';

import { getrecents } from '~/ultils/services/OrdersService';

import { useEffect, useState } from 'react';
import { v4 } from 'uuid';

const cx = classNames.bind(styles);

const dataOrder = [
    {
        id: 1,
        user: 'Van Duc',
        bookingDate: '13/07/2005',
        status: 'Chờ xác nhận',
    },
    {
        id: 2,
        user: 'Trang',
        bookingDate: '14/07/2005',
        status: 'Đã xác nhận',
    },
    {
        id: 3,
        user: 'Hoang',
        bookingDate: '15/07/2005',
        status: 'Đã xác nhận',
    },
    {
        id: 4,
        user: 'An',
        bookingDate: '16/07/2005',
        status: 'Chờ xác nhận',
    },
    {
        id: 5,
        user: 'Linh',
        bookingDate: '17/07/2005',
        status: 'Chờ xác nhận',
    },
    {
        id: 6,
        user: 'Nam',
        bookingDate: '18/07/2005',
        status: 'Đã xác nhận',
    },
    {
        id: 7,
        user: 'Tung',
        bookingDate: '19/07/2005',
        status: 'Chờ xác nhận',
    },
];

const tableTitle = (
    <div className={cx('order')}>
        <p>Mã đơn</p>
        <p>Người đặt</p>
        <p>Ngày đặt</p>
        <p>Trạng thái</p>
    </div>
);

function Home() {
    getCookie('login');
    const [orders, setOrder] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getrecents();
            setOrder(response.data);
        };
        fetchData();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Dashboard</h1>
            <div className={cx('content')}>
                <div className={cx('main')}>
                    <Cards />
                    <Table title="Recent Orders" tableTitle={tableTitle}>
                        {orders.map((order) => {
                            return (
                                <RecentOrders
                                    key={v4()}
                                    id={order.id}
                                    user={order.username}
                                    date={order.created_at}
                                    status={
                                        order.payment_status === '1' ? (
                                            <span>Đã thanh toán</span>
                                        ) : (
                                            <span>Chưa thanh toán</span>
                                        )
                                    }
                                />
                            );
                        })}
                    </Table>
                </div>
                <div className={cx('review')}>
                    <Ranking title="Top Mua Hàng" />
                    <CustomerReview />
                </div>
            </div>
        </div>
    );
}

export default Home;
