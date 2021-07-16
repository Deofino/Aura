import React from "react";
import Menu from "./Menu";

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDrawer: "",
        };
    }
    /**
     * Faz o menu fica responsivo, trazendo-o para a tela e animacao no botao
     */
    clickDrawer = () => {
        this.setState({
            isDrawer: this.state.isDrawer === "" ? " active" : "",
        });
    };
    render() {
        return (
            <nav className="c-navbar">
                <div className="c-navbar__logo shadow">
                    <h2 className="c-navbar__image">LOGO</h2>
                </div>

                <button
                    className={"d-none shadow btn-openDrawer" + this.state.isDrawer}
                    onClick={() => this.clickDrawer()}
                ></button>

                <Menu isDrawer={this.state.isDrawer} />
            </nav>
        );
    }
}
