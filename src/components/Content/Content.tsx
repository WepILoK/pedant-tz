import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Layout, Table} from "antd";

import {Filter} from "./Filter";
import {getFilters, getOrderList} from "../../redux/selector";
import {fetchOrdersList} from "../../redux/orderList";

const {Content} = Layout;

const columns = [
    {
        title: 'Номер телефона',
        dataIndex: 'phoneNumber',
        key: 'phoneNumber',
    },
    {
        title: 'Имя Фамилия',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Заказ',
        dataIndex: 'typeOfWork',
        key: 'typeOfWork',
    },
    {
        title: 'Цена работ',
        dataIndex: 'priceOfWork',
        key: 'priceOfWork',
    },
];

export const ContentComp = () => {
    const dataSource = useSelector(getOrderList)
    const dispatch = useDispatch();
    const {phoneNumber, typeOfWork, paid} = useSelector(getFilters)

    React.useEffect(() => {
        dispatch(fetchOrdersList(phoneNumber, typeOfWork, paid))
    }, [phoneNumber, typeOfWork, paid]);

    return (
        <Content style={{margin: '0 16px'}}>
            <div style={{padding: 24, background: '#fff', minHeight: 360, marginTop: "20px"}}>
                <Filter/>
                <Table dataSource={dataSource} columns={columns} style={{marginTop: "20px"}}/>
            </div>
        </Content>
    )
}