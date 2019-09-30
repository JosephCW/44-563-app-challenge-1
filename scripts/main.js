function convertToCFromK(temperatureK) {
    // TempC = k - 273.15
    return (temperatureK - 273.15).toFixed(2)
}

// Update the dom with the updated answer
// unveil the answer paragraph
function setAnswerText(value) {
    $("#answer").html(`${value} &#8451;`)
    $("#answer-p").show()
}

function submitButtonPressed() {
    // Get the temperature that was put in by the user.
    const temperatureK = parseFloat($("#input-k").val())
    const temperatureKFixed = temperatureK.toFixed(2)
    //console.log(temperatureKFixed)
    const temperatureC = convertToCFromK(temperatureKFixed)
    //console.log(temperatureC)
    setAnswerText(temperatureC)
}

// When the submit button gets pressed
$("#submit-button").on("click", () => {
    submitButtonPressed()
})
