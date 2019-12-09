import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

const Wrapper = styled.section`
  background: #20beec;
  margin: 30px 720px;
  border-radius: 7px;
`;

const Button = styled.button`
  font-size: 1.3rem;
  color: #ffffff;
  border: none;
  border-radius: 7px;
  padding: 7px 10px;
  background: #e82010;
  &:hover {
    background: #ff7000;
  }
`;

const H1 = styled.h1`
  color: #ffffff;
  font-size: 3em;
  border-radius: 5px;
  margin: 10px;
  font-family: Arial;
`;

const Input = styled.input`
  width: 90%;
  padding: 8px 10px;
  margin: 4px;
  border-radius: 7px;
`;

const Select = styled.select`
  width: 79%;
  padding: 8px 10px;
  margin: 4px 3px;
  border-radius: 7px;
`;

const Div1 = styled.div`
  text-align: center;
  padding: 35px 5px;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: 0,
      second: 0,
      oper: '',
      result: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    this.calculate();
  }
  handleChange(e) {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  async calculate(props) {
    let num1 = this.state.first;
    let num2 = this.state.second;
    let sign = this.state.oper;

    if (sign === '+') {
      this.setState({
        result: parseInt(num1) + parseInt(num2)
      });
      console.log('Added');
    }
    if (sign === '-') {
      this.setState({
        result: num1 - num2
      });
      console.log('Subtracted');
    }
    if (sign === 'x') {
      this.setState({
        result: num1 * num2
      });
      console.log('Multiplied');
    }
    if (sign === '/') {
      this.setState({
        result: num1 / num2
      });
      console.log('Devided');
    }
  }

  render() {
    return (
      <Wrapper>
        <Div1>
          <H1> Calculator</H1>
          <form onSubmit={this.handleSubmit}>
            <div className="input-group">
              <Input
                type="number"
                name="first"
                placeholder="Enter the first number"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-group">
              <Input
                type="number"
                name="second"
                placeholder="Enter the second number"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-group">
              <Select name="oper" onChange={this.handleChange}>
                <option value="" hidden>
                  Operator
                </option>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="x">x</option>
                <option value="/">/</option>
              </Select>
              <Button type="submit" onClick={this.calculate}>
                Count
              </Button>
            </div>
            <div>
              <Input
                type="text"
                id="result"
                placeholder="0"
                value={this.state.result}
              />
            </div>
          </form>
        </Div1>
      </Wrapper>
    );
  }
}

export default App;
