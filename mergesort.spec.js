describe('Merge Sort', function(){
    it('is able to merge two sorted arrays', function(){
        expect(merge([2, 4, 7], [6, 33, 55])).toEqual([2, 4, 6, 7, 33, 55]);
    });
});

describe('Merge Sort', function(){
    it('is able to merge two sorted arrays', function(){
        expect(merge([2], [6])).toEqual([2, 6]);
    });
});

describe('Merge Sort', function(){
    it('is able to merge two sorted arrays', function(){
        expect(merge([2, 3, 4], [6, 8])).toEqual([2, 3, 4, 6, 8]);
    });
});

describe('Merge Sort', function(){
    it('is able to merge two sorted arrays', function(){
        expect(merge([1], [])).toEqual([1]);
    });
});

describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1, 2, 4, 6, 7, 33, 55])).toEqual([[1, 2, 4, 6], [7, 33, 55]]);
  });
});

describe('merges and sorts an array', function() {
  it('is able to split an array into two halves', function() {
    expect(mergeSort([33, 1, 6, 2, 4, 55, 3, 40])).toEqual([1, 2, 3, 4, 6, 33, 40, 55]);
  });
});