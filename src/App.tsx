import React from 'react';
import {Layout} from "antd";

import {HeaderComp} from "./components/Header/Header";
import { ContentComp } from './components/Content/Content';

import './App.css';


export const App = () => {
    return (
        <div>
            <Layout style={{minHeight: '100vh'}}>
                <Layout>
                    <HeaderComp/>
                    <ContentComp/>
                </Layout>
            </Layout>
        </div>
    );
}

