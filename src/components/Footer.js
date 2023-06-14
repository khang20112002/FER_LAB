import { render } from "@testing-library/react";
import React, { Component } from "react";
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                copyright ©️ 2020
            </div>
        )
    }
}

