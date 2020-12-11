import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import userLogin from '../src/login/reducers/LoginReducer';
import LoginActionConstants from '../src/login/actions/LoginActionConstants';
import { dispatchLoginDetails, dispatchLoginSuccess } from '../src/login/actions/LoginActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// allows us to easily return reponses and/or success/fail for a thunk that calls a service
const mockServiceCreator = (body, succeeds = true) => () =>
  new Promise((resolve, reject) => {
    setTimeout(() => (succeeds ? resolve(body) : reject(body)), 10);
  });

describe('Test Login Action', () => {
  let store;
  beforeEach(() => {
    store = mockStore({ username: '' });
  });

  describe('Test user logged in', () => {
    it('', () => {
      store
        .dispatch(dispatchLoginDetails('apsa'));
      expect(store.getActions()).toContainEqual({ type: LoginActionConstants.UPDATE_USERNAME, value: { username: 'apsa' } });
    });
  });

  describe('Test user is logged in', () => {
    it('', () => {
      store
        .dispatch(dispatchLoginSuccess(true));
      expect(store.getActions()).toContainEqual({ type: LoginActionConstants.SET_LOGIN_STATUS, value: true });
    });
  });

});

describe('Testing UserLogin Reducer', () => {
  const userLoginReducer = userLogin.data;
  const userLoginReducerError = userLogin.error;

  it('Login Reducer should return the initial state', () => {
    expect(userLoginReducer({}, {})).toEqual({});
  });
  it('Test Login UserName Dispatch in store', () => {
    const successAction = {
      type: LoginActionConstants.UPDATE_USERNAME,
      value: 'apsa'
    };
    expect(userLoginReducer({}, successAction)).toEqual({ "username": 'apsa' });
  });
  it('Test Login UserName Dispatch in store', () => {
    const successAction = {
      type: LoginActionConstants.UPDATE_USERNAME,
      value: ''
    };
    expect(userLoginReducer({}, successAction)).toEqual({ "username": '' });
  });
  it('Test the is user logged In ', () => {
    const successAction = {
      type: LoginActionConstants.SET_LOGIN_STATUS,
      value: true
    };
    expect(userLoginReducer({}, successAction)).toEqual({ 'isLogIn': true });
  });

  it('Test the is user logged out ', () => {
    const successAction = {
      type: LoginActionConstants.SET_LOGIN_STATUS,
      value: false
    };
    expect(userLoginReducer({}, successAction)).toEqual({ 'isLogIn': false });
  });
  it('it handles when error occurs during data fetch', () => {

    expect(userLoginReducerError({}, {})).toEqual({});
  });

});