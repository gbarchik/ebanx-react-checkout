import React from 'react'
import { shallow } from 'enzyme'

import Main from './index'
import Header from '../Header/container'
import Footer from '../Footer/container'
import Cart from '../Cart/container'
import Payment from '../Payment/container'
import ThankYou from '../ThankYou/container'

const fakeProps = {
    checkout: {
        bought: false
    }
}

describe('(Layout) Main', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<Main {...fakeProps} />)
        expect(wrapper).toMatchSnapshot()
    })

    it('renders as a <div>', () => {
        const wrapper = shallow(<Main {...fakeProps} />)
        expect(wrapper.type()).toBe('div')
    })

    it('should render a <Header>', () => {
        const wrapper = shallow(<Main {...fakeProps} />)
        expect(wrapper.find(Header)).toHaveLength(1)
    })

    it('should render a <Footer>', () => {
        const wrapper = shallow(<Main {...fakeProps} />)
        expect(wrapper.find(Footer)).toHaveLength(1)
    })

    it('should render a <Cart> and a <Payment> if bought is false', () => {
        const wrapper = shallow(<Main {...fakeProps} />)
        wrapper.setProps({ checkout: { bought: false } })
        expect(wrapper.find(Cart)).toHaveLength(1)
        expect(wrapper.find(Payment)).toHaveLength(1)
    })

    it('should not render a <ThankYou> if bought is false', () => {
        const wrapper = shallow(<Main {...fakeProps} />)
        wrapper.setProps({ checkout: { bought: false } })
        expect(wrapper.find(ThankYou)).toHaveLength(0)
    })

    it('should not render a <Cart> and a <Payment> if bought is true', () => {
        const wrapper = shallow(<Main {...fakeProps} />)
        wrapper.setProps({ checkout: { bought: true } })
        expect(wrapper.find(Cart)).toHaveLength(0)
        expect(wrapper.find(Payment)).toHaveLength(0)
    })

    it('should render a <ThankYou> if bought is true', () => {
        const wrapper = shallow(<Main {...fakeProps} />)
        wrapper.setProps({ checkout: { bought: true } })
        expect(wrapper.find(ThankYou)).toHaveLength(1)
    })
})
