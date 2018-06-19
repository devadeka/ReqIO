import React from 'react';
import Tree from 'react-d3-tree';
 
class TreeGraph extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }


  nodeClick = (nodeData,evt) => {
    console.log(nodeData)
  }

  render() {
    const { data, onClick } = this.props;
    const displayData = (data[0]===undefined)?([{name:"New Project"}]):(data);
    
    console.log(data);

    return (
      <div style={{width: '100%', height: '100%'}}>
        <Tree data={displayData} 
              onClick={onClick}
              orientation="vertical" />
      </div>
    );
  }
}

export default (TreeGraph);