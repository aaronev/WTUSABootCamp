/* eslint-disable */
import React, { Component } from 'react'; //eslint-disable-line
import { connect } from 'react-redux';
import { Customers } from '../actions';
import store from '../store';
import CustomerInfo from '../components/customer-info';
import CustomerHeader from '../components/customer-header';
const mapStateToProps = state => {
  console.log( "=-=-=-> state.customers", state.customers.customers )
  return {customers: state.customers.customers}
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAll: () => dispatch(Customers.fetchAll())
  }
};

class DashBoardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tab: 'open',
    };
  }

  componentWillMount() {
    this.props.fetchAll();
  }

  tabSelect(tab) {
    this.setState({ tab });
  }

  render() {
    return (
      <div>
        <div className="columns is-offset-1">
          <div className="column">
            Leads: {Object.values(this.props.customers).filter(customer => customer.status === 'open').length}
          </div>
          <div className="column">
            Rejected: {Object.values(this.props.customers).filter(customer => customer.status === 'rejected').length}
          </div>
          <div className="column">
            Joined: {Object.values(this.props.customers).filter(customer => customer.status === 'joined').length}
          </div>
          <div className="column">
            Total: {this.props.customers.length}
          </div>
        </div>
        <div className="tabs is-offset-1">
          <ul>
            <li className={this.state.tab === 'open' ? "is-active" : ""}>
              <a onClick={this.tabSelect.bind(this,'open')}>Open</a></li>
            <li className={this.state.tab === 'joined' ? "is-active": ""}>
              <a onClick={this.tabSelect.bind(this,'joined')}>Joined</a></li>
            <li className={this.state.tab === 'rejected' ? "is-active": ""}>
              <a onClick={this.tabSelect.bind(this,'rejected')}>Rejected</a></li>
            <li className={this.state.tab === 'all' ? "is-active": ""}>
              <a onClick={this.tabSelect.bind(this,'all')}>All</a></li>
          </ul>
        </div>
         <div >
          <CustomerHeader />
          {this.props.customers.length
            ? this.props.customers.map(person => {
                if(this.state.tab === person.status || this.state.tab === 'all') {
                  return <CustomerInfo customer={person} key={person.id}/>
                }
              })
            : 'Loading...'
          }
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoardContainer)
