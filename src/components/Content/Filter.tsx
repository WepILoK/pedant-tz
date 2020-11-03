import React, {ChangeEvent, useState} from "react";
import {Button, Checkbox, Col, Input, Row, Select} from "antd";
import {useDispatch, useSelector} from "react-redux";

import {actions} from "../../redux/filter";
import {getFilters} from "../../redux/selector";
import {fetchOrdersList} from "../../redux/orderList";


const {Option} = Select;

export const Filter = () => {
    const [phoneValue, setPhoneValue] = useState("")
    const {phoneNumber, typeOfWork, paid} = useSelector(getFilters)
    const dispatch = useDispatch()

    function handleChange(value: string) {
        if (value === undefined || value === "null") {
            dispatch(actions.setTypeOfWork(null))
        } else {
            dispatch(actions.setTypeOfWork(value))
        }
    }

    function onChange(e: any) {
        dispatch(actions.setPriseOfWork(e.target.checked))
    }

    const phoneNumberValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length === 11) {
            const number = Number(e.target.value)
            dispatch(actions.setPhoneNumber(number))
        } else if (e.target.value.length === 0) {
            const number = null
            dispatch(actions.setPhoneNumber(number))
        }
        setPhoneValue(e.target.value)
    }

    const applyFilters = () => {
        dispatch(fetchOrdersList(phoneNumber, typeOfWork, paid))
    }

    return (
        <Row>
            <Col span={6}>
                <Input onChange={phoneNumberValue} placeholder="8**********" value={phoneValue}
                       style={{width: "150px", borderRadius: "20px"}}/>
            </Col>
            <Col span={6}>
                <Select allowClear defaultValue="null" style={{width: 120,}} onChange={handleChange}>
                    <Option value="null"></Option>
                    <Option value="Стрижка">Стрижка</Option>
                    <Option value="Маникюр">Маникюр</Option>
                    <Option value="Педикюр">Педикюр</Option>
                </Select>
            </Col>
            <Col span={6}>
                <Checkbox style={{marginTop: "5px"}} onChange={onChange}>Только оплаченные</Checkbox>
            </Col>
            <Col span={6}>
                <Button onClick={applyFilters} style={{backgroundColor: "#289522", borderRadius: "20px"}}
                        type="primary">
                    Применить
                </Button>
            </Col>
        </Row>
    )
}