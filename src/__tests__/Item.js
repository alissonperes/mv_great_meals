import React from 'react';
import { Provider } from 'react-redux';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Item from '../components/Item';
import store from '../store';

configure({ adapter: new Adapter() });
const match = { params: { id: 1 } };

describe('<Item />', () => {
  let wrapper;
  describe('rendering', () => {
    beforeEach(() => {
      wrapper = shallow(
        <Provider store={store}>
          <Item match={match} />
        </Provider>,
      );
    });

    it('should render the Item component', () => {
      expect(wrapper.find(Item)).toHaveLength(1);
    });

    it('renders children when passed in', () => {
      const wrapperWithChild = shallow(
        <Provider store={store}>
          <Item match={match}>
            <div className="unique" />
          </Item>
        </Provider>,
      );

      expect(wrapperWithChild.contains(<div className="unique" />)).toBe(true);
    });
  });
});
