import React from 'react';
import { Link } from 'react-static';
import Nav, { toggle, Navi } from './Nav';

describe('Local State', () => {
  it('should toggle to open true', () => {
    const state = { open: false };
    const newState = toggle(state);

    expect(newState.open).to.equal(true);
  });

  it('should toggle to open false', () => {
    const state = { open: true };
    const newState = toggle(state);

    expect(newState.open).to.equal(false);
  });
});

describe('Nav Component', () => {
  it('renders the Nav wrapper', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.find(Navi)).to.have.length(1);
  });
  it('renders the Nav Children', () => {
    const wrapper = shallow(<Nav><Link to="/">LauriKatajisto.com</Link></Nav>);
    const topnav = wrapper.find('.topnav').children();
    expect(topnav).to.have.length(2);
  });
  it('toggles Nav class', () => {
    const wrapper = shallow(<Nav />);
    wrapper.setState({ open: false });
    const button = wrapper.find('a');
    button.simulate('click');
    expect(wrapper.state().open).to.equal(true);
  });
});

