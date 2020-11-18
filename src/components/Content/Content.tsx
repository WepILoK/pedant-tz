import React from "react";
import {Layout, Table} from "antd";
import { useStore } from "effector-react";

import {Filter} from "./Filter";
import {fetchOrdersList, orderList} from "../../effector/orderList";
import {filter} from "../../effector/filter";


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
    const dataSource = useStore(orderList)
    const {phoneNumber, typeOfWork, paid} = useStore(filter)

    React.useEffect(() => {
        fetchOrdersList({phoneNumber, typeOfWork, paid})

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

