QUnit.test( "smallestTest", function( assert ) {
    const input1 = "asdf"
    const input2 = "asdfjkl;"
    const input3 = "asdfjkl;1"
    const input4 = "jkl;"

    assert.equal(input1, smallest(input1, input2, input3))
    assert.equal(input2, smallest(input3, input3, input2))
  });