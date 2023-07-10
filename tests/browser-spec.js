describe("Pincode", function() {
    it("should validate correct pincodes", function() {
        expect(Pincode.validate("110011")).toEqual(true);
        expect(Pincode.validate("244713")).toEqual(true);
        expect(Pincode.validate("560029")).toEqual(true);
        expect(Pincode.validate("560030")).toEqual(true);
    });

    it("should validate incorrect pincodes", function() {
        // Incorrect
        expect(Pincode.validate("1100111")).toEqual(false);
        expect(Pincode.validate("111111")).toEqual(false);
        expect(Pincode.validate("999999")).toEqual(false);
        expect(Pincode.validate("99999")).toEqual(false);
        expect(Pincode.validate("9999")).toEqual(false);
        expect(Pincode.validate("999")).toEqual(false);
        expect(Pincode.validate("99")).toEqual(false);
        expect(Pincode.validate("9")).toEqual(false);
    });

    it("should support search method", function() {
      expect(Pincode.search('bangalore 560038 244713')).toEqual(['560038', '244713']);
      expect(Pincode.search('bangalore 560038')).toEqual(['560038']);
      expect(Pincode.search('560038 BENGALURU')).toEqual(['560038']);
      expect(Pincode.search('560038')).toEqual(['560038']);
      expect(Pincode.search('my pincode is 244713')).toEqual(['244713']);
      expect(Pincode.search('560029 pin')).toEqual(['560029']);
    })

    it("should export direct regexes", function() {
      expect(Pincode.regex instanceof RegExp).toBe(true);
      expect(Pincode.exactRegex instanceof RegExp).toBe(true);
    })

    it("should support exact regex matches", function() {
      expect(Pincode.exactRegex.test('560029')).toBe(true);
      expect('111111').not.toMatch(Pincode.exactRegex);
      expect('address is 560029').not.toMatch(Pincode.exactRegex);
    })

    it("should support inexact regex matches", function() {
      expect('560029').toMatch(Pincode.regex);
      expect('address is 560029').toMatch(Pincode.regex);
      expect('address is 111111').not.toMatch(Pincode.regex)
      expect('111111').not.toMatch(Pincode.regex)

    })
});
