describe('na filter', function() {

  beforeEach(module('common'));

  it('shall return text given as argument if input is either undefined or null or false.',
     inject(function(naFilter) {
        expect(naFilter(null,'null-string')).toBe('null-string');
        expect(naFilter(undefined, 'undefined-string')).toBe('undefined-string');
        expect(naFilter("", 'empty-string')).toBe('empty-string');
        expect(naFilter(false, 'false-string')).toBe('false-string');
     })
  );

  it('shall return original input unchanged if input is neither undefined nor null nor false.',
      inject(function(naFilter) {
        expect(naFilter(123,'number')).toBe(123);
        expect(naFilter("abc", 'non-empty-string')).toBe('abc');
        expect(naFilter(true, 'true-value')).toBe(true);
        expect(naFilter([], 'empty-array')).toEqual([]);
        expect(naFilter({}, 'empty-object')).toEqual({});
     })
   );
});
