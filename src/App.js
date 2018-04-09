import React, { Component } from 'react';
import Tree from 'react-d3-tree';
import './App.css';
import {BinarySearchTree} from './BinarySearchTree2'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: [15, 4, 5, 12, 1, 7, 93, 23, 11, 35],
      binarySearchTree: {},
      binaryTree: {},
      currentTraversal: [],
      traversalType: "pre-order",
      currentTree:[
        {
          name: 'Top Level',
          children: [
            {
              name: 'Level 2: A',
              children: [{},{}],
            },
            {
              name: 'Level 2: B',
            },
          ],
        },
      ],
    }
  }

  testTree = () =>{
    const newTreeObject = new BinarySearchTree();
    this.state.input.forEach(element => newTreeObject.insert(element));
    const newTraversal = newTreeObject.newTraverse(this.state.traversalType);
    const newTree = newTreeObject.getTree();
    this.setState({
      binarySearchTree: newTreeObject,
      currentTraversal: newTraversal,
      currentTree: [newTree],
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick ={this.testTree}>Test Tree</button>
        <Tree data={this.state.currentTree} />
      </div>
    );
  }
}

export default App;