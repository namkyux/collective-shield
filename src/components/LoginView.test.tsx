import React from "react";
import { shallow } from 'enzyme';
import LoginView from './LoginView';

describe('LoginView', () => {
  it('is defined', () => {
    const wrapper = shallow(<LoginView />);
    expect(wrapper).toBeDefined();
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<LoginView />);
    expect(wrapper).toMatchSnapshot();
  });
});
