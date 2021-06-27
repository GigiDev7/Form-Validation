var form = document.getElementById('form')
var username = document.getElementById('username')
var email = document.getElementById('email')
var password = document.getElementById('password')
var password2 = document.getElementById('password2')

// Show error
function showError(input,message){
    var formControl = input.parentElement
    formControl.className = 'form-control error'
    var small = formControl.querySelector('small')
    small.innerText = message
}

// Show success
function showSuccess(input){
    var formControl = input.parentElement
    formControl.className = 'form-control success'
}

// Check email validation
function checkEmail(input) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if( re.test(input.value.trim())){
        showSuccess(input)
    }else{
        showError(input, ' Email is not valid')
    }
}


// Check required
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value == ''){
            showError(input, getFieldName(input) + ' is required')
        }else{
            showSuccess(input)
        }
    })
}

// Check length
function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input, getFieldName(input) + ' must be at least ' + min + ' characters ')
    }else if(input.value.length > max){
        showError(input, getFieldName(input) + ' must be less than ' + max + ' characters')
    }else{
        showSuccess(input)
    }
}


// Check password match
function checkPassword(input1,input2) {
    if(input1.value !== input2.value){
        showError(input2, ' Passwords do not match ')
    }
}


// Check username
function checkUsername(input){
    var regEx = /^[A-Za-z]{3,}\d*$/g;
    if(regEx.test(input.value)){
        showSuccess(input)
    }else{
        showError(input, 'Username is not valid')
    } 
}


// Get field name
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}



form.addEventListener('submit',function(e){
    e.preventDefault()

    checkRequired([username,email,password,password2])
    checkLength(username,3,15)
    checkLength(password,6,18)
    checkEmail(email)
    checkPassword(password,password2)
    checkUsername(username)
});