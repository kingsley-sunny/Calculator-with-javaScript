const form = document.querySelector("form");
const input = document.querySelector(".resultSection");
const resultShown = document.querySelector(".resultShown");
const equalToBtn = document.querySelector(".equalToBtn");
const btns = document.querySelectorAll(".clickToShowBtn");
const delBtn = document.querySelector(".delBtn");
const clearBtn = document.querySelector(".clearBtn");


form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    console.log(resultShown.textContent)
    if(typeof parseFloat(resultShown.textContent) === 'number'){
        resultShown.textContent = Function("return " + input.value)();
    } else {
        resultShown.textContent = 'Error'
    }

    // resultShown.textContent = Function("return " + input.value)();
  
});

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    input.value += btn.textContent;
  });
});

delBtn.addEventListener("click", function () {
  input.value = input.value.substr(0, input.value.length - 1);
  // console.log(input.value.substr(0, 5))
});

clearBtn.addEventListener("click", function () {
  input.value = ''
});

equalToBtn.addEventListener('click', function(){
    if(typeof parseFloat(resultShown.textContent) === 'number'){
        resultShown.textContent = Function("return " + input.value)();
    } else {
        resultShown.textContent = 'Error'
    }
})

