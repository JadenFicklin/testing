let myFunctions = require('./functions')

test('Return two', () => {
    expect(myFunctions.returnTwo()).toBe(2)
})

test("Greeting Test", () => {
    expect(myFunctions.greeting('jaden')).toBe('Hello jaden.')
})

test("Addition Test", () => {
    expect(myFunctions.add(13, 2)).toBe(15)
})