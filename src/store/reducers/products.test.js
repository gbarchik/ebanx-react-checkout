import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {
    FETCHING_PRODUCTS,
    PRODUCTS_LOADED,
    fetchingProducts,
    productsLoaded,
    loadProducts,
    productsReducer
} from './products'

const mockStore = configureMockStore([thunk])

describe('(Reducers) products', () => {
    it('should export the constants FETCHING_PRODUCTS and PRODUCTS_LOADED', () => {
        expect(FETCHING_PRODUCTS).toBe('FETCHING_PRODUCTS')
        expect(PRODUCTS_LOADED).toBe('PRODUCTS_LOADED')
    })

    describe('(Actions)', () => {
        it('should be functions', () => {
            expect(fetchingProducts).toEqual(expect.any(Function))
            expect(productsLoaded).toEqual(expect.any(Function))
        })

        describe('(fetchingProducts', () => {
            it('should return an action with type "FETCHING_PRODUCTS"', () => {
                expect(fetchingProducts()).toEqual(expect.objectContaining({
                    type: FETCHING_PRODUCTS
                }))
            })
        })

        describe('(productsLoaded', () => {
            it('should return an action with type "PRODUCTS_LOADED"', () => {
                expect(productsLoaded({})).toEqual(expect.objectContaining({
                    type: PRODUCTS_LOADED
                }))
            })
        })
    })

    describe('(Dispatchers)', () => {
        describe('(loadProducts', () => {
            it('should be function', () => {
                expect(loadProducts).toEqual(expect.any(Function))
            })

            it('should return PRODUCTS_LOADED after FETCHING_PRODUCTS', () => {
                const store = mockStore()
                store.dispatch(loadProducts()).then(() => {
                    expect(store.getActions()).toEqual(expect.arrayContaining([
                        {
                            type: FETCHING_PRODUCTS,
                            products: expect.any(Array),
                            isLoading: true
                        },
                        {
                            type: PRODUCTS_LOADED,
                            products: expect.any(Array),
                            isLoading: false
                        }
                    ]))
                })
            })
        })
    })

    describe('(Reducer)', () => {
        it('should be a function', () => {
            expect(productsReducer).toEqual(expect.any(Function))
        })

        it('should be initialized with an empty array of products', () => {
            expect(productsReducer(undefined, {})).toEqual(expect.any(Object))
            expect(productsReducer(undefined, {})).toEqual(expect.objectContaining({
                products: expect.any(Array)
            }))
            expect(productsReducer(undefined, {}).products).toHaveLength(0)
        })
    })
})