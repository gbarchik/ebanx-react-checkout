import React from 'react'
import { shallow, mount } from 'enzyme'

import Header from './index'

const fakeProps = {
    config: {
        title: 'E-book Store',
        description: 'Welcome to the best place'
    },
    checkout: {
        bought: false
    }
}

describe('(Layout) Header', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<Header {...fakeProps} />)
        wrapper.setProps({
            config: {
                title: ''
            }
        })
        expect(wrapper).toMatchSnapshot()
    })

    it('renders as a <header>', () => {
        const wrapper = mount(<Header {...fakeProps} />)
        expect(wrapper.find('header')).toMatchSelector('header')
    })

    it('should render a <h1> title', () => {
        const wrapper = mount(<Header {...fakeProps} />)
        expect(wrapper.find('h1')).toMatchSelector('h1')
    })

    it('should render the Title', () => {
        const wrapper = mount(<Header {...fakeProps} />)
        wrapper.setProps({ config: { title: 'EBANX' } })
        expect(wrapper.find('h1')).toHaveText('EBANX')
    })

    it('should show the description if it is not the ThankYou page', () => {
        const wrapper = mount(<Header {...fakeProps} />)
        expect(wrapper.find('p')).toExist()
    })

    it('should not show the description if it is the ThankYou page', () => {
        const wrapper = mount(<Header {...fakeProps} />)
        wrapper.setProps({ checkout: { bought: true } })
        expect(wrapper.find('p')).not.toExist()
    })
})
