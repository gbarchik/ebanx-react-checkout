import { default as createStore } from './createStore'

const store = createStore()

describe('(Store) createStore', () => {

    describe('(config)', () => {
        it('store should be initialized with site\'s Title and Description', () => {
            expect(store.getState().config).toEqual({
                title: 'E-book Store',
                description: 'Welcome to the best place for you to learn about Latin América E-commerce. Start to learn now and discovery ways options to improve your sales.',
                poweredBy: 'EBANX  •  Products B2B'
            })
        })
    })
})