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
        expect(wrapper).toMatchSelector('div')
    })

    it('should render a <Header>', () => {
        const wrapper = shallow(<Main {...fakeProps} />)
        expect(wrapper.find(Header)).toExist()
    })

    it('should render a <Footer>', () => {
        const wrapper = shallow(<Main {...fakeProps} />)
        expect(wrapper.find(Footer)).toExist()
    })

    it('should render a <Cart> and a <Payment> if bought is false', () => {
        const wrapper = shallow(<Main {...fakeProps} />)
        wrapper.setProps({ checkout: { bought: false } })
        expect(wrapper.find(Cart)).toExist()
        expect(wrapper.find(Payment)).toExist()
    })

    it('should not render a <ThankYou> if bought is false', () => {
        const wrapper = shallow(<Main {...fakeProps} />)
        wrapper.setProps({ checkout: { bought: false } })
        expect(wrapper.find(ThankYou)).not.toExist()
    })

    it('should not render a <Cart> and a <Payment> if bought is true', () => {
        const wrapper = shallow(<Main {...fakeProps} />)
        wrapper.setProps({ checkout: { bought: true } })
        expect(wrapper.find(Cart)).not.toExist()
        expect(wrapper.find(Payment)).not.toExist()
    })

    it('should render a <ThankYou> if bought is true', () => {
        const wrapper = shallow(<Main {...fakeProps} />)
        wrapper.setProps({ checkout: { bought: true } })
        expect(wrapper.find(ThankYou)).toExist()
    })
})
