import React from "react";
import {Col, Icon, Layout, Row} from "antd";

const {Header} = Layout;


export const HeaderComp = () => {
    return (
        <Header style={{background: '#fff', padding: 0}}>
            <Row>
                <Col span={1}>
                    <Icon type="menu-unfold" style={{marginTop: "27px"}}/>
                </Col>
                <Col span={1}>
                    <p style={{fontSize: "30px", fontWeight: "bold"}}>Заказы</p>
                </Col>
                <Col span={22}>

                </Col>
            </Row>
        </Header>
    )
}