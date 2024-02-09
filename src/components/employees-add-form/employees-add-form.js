import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"",
            salary:""
        }
    }
    onValueChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        console.log(this.props)
        const {addItem} =this.props
        const {name, salary}=this.state
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input onChange={this.onValueChange} name = "name" type="text" value={name} 
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"/>
                    <input onChange={this.onValueChange} type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" name="salary" value={salary} />
    
                    <button onClick={(e)=>addItem(e,name, salary)} type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;