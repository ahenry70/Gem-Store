describe('sumAll', function(){
  it('Entered ([1,1]) -- Expect (2)', function(){
    expect(sumAll([1,1])).toEqual(2);}
  );
  it('Entered ([1,2]) -- Expect (3)', function(){
    expect(sumAll([1,2])).toEqual(3);}
  );
  it('Entered ([1,3]) -- Expect (6)', function(){
    expect(sumAll([1,3])).toEqual(6);}
  );
  it('Entered ([10,5]) -- Expect (45)', function(){
    expect(sumAll([10,5])).toEqual(45);}
  );
  it('Entered ([1,4]) -- Expect (10)', function(){
    expect(sumAll([1,4])).toEqual(10);}
  );
  it('Entered ([-1,4]) -- Expect (9)', function(){
    expect(sumAll([-1,4])).toEqual(9);}
  );
});
