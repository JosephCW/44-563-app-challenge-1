function convertToCFromK(temperatureK) {
    if (isNaN(temperatureK)) {
        throw new Error("Please enter a temperature in K!")
    } else if (temperatureK < 0) {
        throw new Error("Kelvin is an absolute temperature and cannot be negative!")
    }

    // TempC = k - 273.15
    return (temperatureK - 273.15).toFixed(2)
}

// Update the dom with the updated answer
// unveil the answer paragraph
function setAnswerText(value) {
    $("#answer").html(`${value} &#8451;`)
    setAnswerParagraphHidden(false)
    $("#error-p").hide()
}

function setErrorText(value) {
    $("#error-text").html(`${value}`)
    $("#error-p").show()
}

function setAnswerParagraphHidden(hidden) {
    if (hidden) {
        $("#answer-p").hide()
    } else {
        $("#answer-p").show()
    }
}

function submitButtonPressed() {
    // Get the temperature that was put in by the user.
    const temperatureK = parseFloat($("#input-k").val())
    const temperatureKFixed = temperatureK.toFixed(2)
    //console.log(temperatureKFixed)
    try {
        const temperatureC = convertToCFromK(temperatureKFixed)
        setAnswerText(temperatureC)
        
    } catch (e) {
        setAnswerParagraphHidden(true)
        setErrorText(e.message)
    }
}

// When the submit button gets pressed
$("#submit-button").on("click", () => {
    submitButtonPressed()
})
