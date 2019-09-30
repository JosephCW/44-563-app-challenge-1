QUnit.test("convertToCFromK", (assert) => {
  const inTemp1k = 123456.12
  const exTemp1c = 123182.97
  const inTemp2k = 273.15
  const exTemp2c = 0
  const inTemp3k = 0
  const exTemp3c = -273.15

  assert.equal(exTemp1c, convertToCFromK(inTemp1k))
  assert.equal(exTemp2c, convertToCFromK(inTemp2k))
  assert.equal(exTemp3c, convertToCFromK(inTemp3k))
})
