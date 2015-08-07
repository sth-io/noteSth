#!javascript
var check = require("../app/functions/checkReqKeys"),
    Note = require('../app/models/note');
 
describe("checkReqKeys", function () {
  it("should check if required fields are met", function () {
    var sampleNote = {
        title: 'some title',
        content: 'some content',
        type: '1',
        owner: 'test'
    }
    var badNote = {
        content: 1,
        type: '1',
        owner: 'test'
    }
    var reqFields = ['owner', 'title', 'type', 'content']
    expect(check(Note, sampleNote, reqFields)).toBe(true);
    expect(typeof check(Note, badNote, reqFields).length).toBe("number");
  });
});    