import React from "react";
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
import Button from './components/core/Button';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "add",
      items: []
    };

    this.onAdd = this.onAdd.bind(this);
    this.onClickTabAdd = this.onClickTabAdd.bind(this);
    this.onClickTabList = this.onClickTabList.bind(this);
    this.onClickTabPay = this.onClickTabPay.bind(this);
  }

  onAdd(item) {
    const newItems = this.state.items;
    newItems.push(item);
    this.setState({
      items: newItems,
      activeTab: 'list' // change tab on every item added
    });
  }

  onClickTabAdd() {
    this.setState({
      activeTab: "add"
    });
  }

  onClickTabList() {
    this.setState({
      activeTab: "list"
    });
  }
  
  onClickTabPay() {
    this.setState({
      activeTab: "pay"
    });
  }

  renderTabs() {
    const { activeTab } = this.state;
    return (
      <div className="col-12">
        <Button
          onClick={this.onClickTabAdd}
          isSelected={activeTab === 'add'}>
          Add
        </Button>
        <Button
          onClick={this.onClickTabList}
          isSelected={activeTab === 'list'}>
          List
        </Button>
        <Button
          onClick={this.onClickTabPay}
          isSelected={activeTab === 'pay'}>
          Pay
        </Button>
      </div>
    );
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <h1>Bakery</h1>
        </div>
        <div className="row" style={{ marginBottom: 20}}>
          {this.renderTabs()}
        </div>
        <div className="row">
          {this.state.activeTab === 'add' && 
            <Add onClick={this.onAdd} />}
          {this.state.activeTab === 'list' && 
            <List items={this.state.items} />}
          {this.state.activeTab === 'pay' && 
            <Pay items={this.state.items} />}
        </div>
      </div>
    );
  }
}

export default App;