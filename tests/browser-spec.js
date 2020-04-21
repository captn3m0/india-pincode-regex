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
});
