import React, { Component } from 'react';
import {List} from 'semantic-ui-react';

class MyTodos extends Component {
  render() {
    return (
      <div>
        <List bulleted>
            <h2>Things I'd Like To Achieve</h2>

            <p>
              My graduation day will be Feb. 11th. Afterwards, I will be continueing to grow my knowledge. On to the job hunt for that first right opportunity. 
            </p>
            <List.Item>Gain an even deeper understanding of JavaScript, React.js and Node.js, anything JavaScript.</List.Item>

            <List.Item>Share my knowledge with others to inspire them to always follow their dreams n matter how many side roads have to be taken to accomplish the end goal.</List.Item>
  
            <List.Item>I am excited to continue deeping my knowledge of Rails and JavaScript.</List.Item>

            <List.Item>I look forward to building on to each of my projects. With new features</List.Item>
        </List>
      </div>
    );
  }
}

export default MyTodos;