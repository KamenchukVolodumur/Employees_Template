import "./app-filter.css";
import { Component } from "react";
class AppFilter extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
        < div className="btn-group" >
            <button type="button"
                className="btn btn-light" onClick={(e)=>{this.props.onUpdateFilter('nothing')}}>
                Все сотрудники
            </button>
            <button name="increase" value={this.props.increase}type="button"
                className="btn btn-outline-light" onClick={(e)=>{this.props.onUpdateFilter('rise')}}>
                На повышение
            </button>
            <button name="like" type="button"
                className="btn btn-outline-light" onClick={(e)=>{this.props.onUpdateFilter('salary')}}>
                З/П больше 1000$
            </button>
        </div >)
    }

}

export default AppFilter;