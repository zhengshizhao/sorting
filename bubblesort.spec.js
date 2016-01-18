
describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });
    it('handles an array with one item', function(){
        expect( bubbleSort([2]) ).toEqual( [2] );
    });
    it('handles an array with many numbers', function(){
        expect( bubbleSort([2, 3, 6, 1]) ).toEqual( [1, 2, 3, 6] );
        expect( bubbleSort([1, 44, 22, 6, 3, 8]) ).toEqual( [1, 3, 6, 8, 22, 44] );
    });
});

describe('Internal sort', function() {
	beforeEach(function() {
		spyOn(window, 'compare');
		bubbleSort([1, 4, 6, 3, 5]);
	});

    it("tracks the number of times compare was called", function() {
  		expect(window.compare.calls.count()).toEqual(5);
	
	});
});

describe('Internal sort', function() {
	beforeEach(function() {
		spyOn(window, 'swap');
		bubbleSort([1, 4, 6, 3, 5]);
	});

    it("tracks the number of times swap was called", function() {
  		expect(window.swap.calls.count()).toEqual(3);
	
	});
});