function smallest(input1, input2, input3) {
    const len1 = input1.length
    const len2 = input2.length
    const len3 = input3.length
    
    if (len1 <= len2 && len1 <= len3) {
        return input1
    } else if (len2 <= len1 && len2 <= len3) {
        return input2
    } else {
        return input3
    }
}

function setAnswerText(value) {
    $("#answer").html(`${value}.`)
    $("#answer-header").show()
}

function submitButtonPressed() {
    const input1 = $("#stringInput1").val()
    const input2 = $("#stringInput2").val()
    const input3 = $("#stringInput3").val()
    console.log(input1)
    console.log(input2)
    console.log(input3)

    const smallestInput = smallest(input1, input2, input3)
    setAnswerText(smallestInput)
}



$("#submit-button").on("click", () => {
    submitButtonPressed()
})

console.log("in page")