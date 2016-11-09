'use strict'


describe("Read Input", function () {
    it("reads the value from our input field", function () {
        $("body").append("<input id='name' value='blah'><input>");
        var inputReader = new InputReader();
        expect(inputReader.readInput()).toEqual("blah");
        $("#name").remove();
    });
});