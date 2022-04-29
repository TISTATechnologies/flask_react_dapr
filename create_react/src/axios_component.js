import React from 'react';
import axios from 'axios';

export default class Axios extends React.Component {

    constructor( props ){
        super( props );
        this.sayHello = this.sayHello.bind(this);
        this.getCurrentTime = this.getCurrentTime.bind(this);
      }


    state = {
        mytime : ""
    }

    
    componentDidMount() {

        setInterval(() => {
            this.getCurrentTime();
          }, 1000);
    }

    componentWillUnmount() {
    }

    sayHello(){
        this.counter = this.counter + 1;
        console.log(this.counter);
        this.setState({time: 'newTime'});
    }

    getCurrentTime(){
        axios.get('/api/currentTime').then(resp => {
            this.setState({mytime: resp.data});
       }).catch(err =>  {});
    }

    render() {
        return (
                <h1>{this.state.mytime}</h1>
            )

    }
}