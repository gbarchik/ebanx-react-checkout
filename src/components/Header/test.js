import React from 'react'
import { shallow } from 'enzyme'

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
        const wrapper = shallow(<Header {...fakeProps} />)
        expect(wrapper.html()).toMatch(/^<header/)
    })

    it('should render a <HeaderTitle> title', () => {
        const wrapper = shallow(<Header {...fakeProps} />)
        expect(wrapper.find('HeaderTitle')).toHaveLength(1)
    })

    it('should render the Title', () => {
        const wrapper = shallow(<Header {...fakeProps} />)
        wrapper.setProps({ config: { title: 'EBANX' } })
        expect(wrapper.find('HeaderTitle').children().text()).toBe('EBANX')
    })

    it('should show the description if it is not the ThankYou page', () => {
        const wrapper = shallow(<Header {...fakeProps} />)
        expect(wrapper.find('p')).toHaveLength(1)
    })

    it('should not show the description if it is the ThankYou page', () => {
        const wrapper = shallow(<Header {...fakeProps} />)
        wrapper.setProps({ checkout: { bought: true } })
        expect(wrapper.find('p')).toHaveLength(0)
    })
})
