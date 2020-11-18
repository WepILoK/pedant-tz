import React, {ChangeEvent, useState} from "react";
import {Button, Checkbox, Col, Input, Row, Select} from "antd";
import { useStore } from "effector-react";

import {filter, setTypeOfWork, setPriseOfWork, setPhoneNumber} from "../../effector/filter";
import {fetchOrdersList} from "../../effector/orderList";


const {Option} = Select;

export const Filter = () => {
    const [phoneValue, setPhoneValue] = useState("")
    const {phoneNumber, typeOfWork, paid} = useStore(filter)

    function handleChange(value: string) {
        if (value === undefined || value === "null") {
            setTypeOfWork(null)
        } else {
            setTypeOfWork(value)
        }
    }

    function onChange(e: any) {
        setPriseOfWork(e.target.checked)
    }

    const phoneNumberValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length === 0) {
            const number = null
            setPhoneNumber(number)
        } else {
            const number = Number(e.target.value)
            setPhoneNumber(number)
        }
        setPhoneValue(e.target.value)
    }

    const applyFilters = () => {
        fetchOrdersList({phoneNumber, typeOfWork, paid})
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