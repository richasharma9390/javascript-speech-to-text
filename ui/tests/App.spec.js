import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../src/App';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter } from 'react-router-dom';
import LoginContainer from '../src/login/components/container/LoginContainer';
import Login from '../src/login/components/presentation/Login';


const mockStore = configureStore([]);

describe("Test All component", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      album: 'sample text'
    });
    store.dispatch = jest.fn();
  });
  it("test App componenet", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it("test Login component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(LoginContainer).length).toBe(0);

  });


  test("Test Login Component", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });

  // it('When user click button', () => {
  //   const onButtonClickMock = jest.fn();
  //   const wrapper = shallow(<Login
  //     submitClickListener={onButtonClickMock}
  //   />);
  //   const buttonElememt = wrapper.find("btn btn-primary btn-block");
  //   buttonElememt.simulate('click');

  //   expect(onButtonClickMock).toHaveBeenCalledTimes(1); // step 3
  //   expect(onButtonClickMock).toHaveBeenCalledWith(true);
  // });


  // it("User text echoed", () => {
  //   const wrapper = shallow(<LoginContainer onInputChangeListener={() => { }} />);
  //   wrapper.find('input').simulate('change', {
  //     target: { value: 'hello' }
  //   });
  //   expect(wrapper.find('input').props().value).toEqual('hello');
  // });

});