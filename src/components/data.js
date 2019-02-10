import React from "react";
import axios from "axios";

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            res => this.setState({ data: res.data }),
            err => this.setState({ error: err })
        )
    }
    render() {
        const data = this.state.data;
        return (
            <section>
                {data.map((d, index) => {
                    return(
                    <div key={index} className="dashboard">
                        <div><span>Id :</span> {d.id}</div>
                        <div><span>Title :</span> {d.title}</div>
                        <div><span>Body :</span> {d.body}</div>
                    </div>)
                })}
            </section>
        )
    }
}

export default Data;