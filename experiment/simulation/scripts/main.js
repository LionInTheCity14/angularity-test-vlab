// THIS SINGLE FUNCTION WILL STOP THE setTimeOut Functions

function myStopFunction() {
  clearTimeout(myTimeout);
}

// STEP 2

function step2() {
  document.querySelector("#step1").style.visibility = "hidden";
  document.querySelector("#next-to-step2").style.visibility = "hidden";

  document.querySelector("#step2").style.visibility = "visible";
  document.querySelector("#arr1").style.visibility = "visible";
  document.querySelector("#trans1").style.visibility = "visible";
}

function movebeaker1Step2() {
  document.querySelector("#png1").style.visibility = "hidden";
  document.querySelector("#arr1").style.visibility = "hidden";
  document.querySelector("#trans1").style.visibility = "hidden";
  document.querySelector("#gif1").style.visibility = "visible";

  myTimeout = setTimeout(myGreeting1Step2, 2500);
}

function clickTare1Step2() {
  document.querySelector("#trans2").style.visibility = "hidden";
  document.querySelector("#gif1").style.visibility = "hidden";
  document.querySelector("#arr2").style.visibility = "hidden";
  document.querySelector("#png2").style.visibility = "visible";

  myTimeout = setTimeout(myGreeting2Step2, 1000);
}

function movebeaker2Step2() {
  document.querySelector("#trans3").style.visibility = "hidden";
  document.querySelector("#arr3").style.visibility = "hidden";
  document.querySelector("#png2").style.visibility = "hidden";
  document.querySelector("#gif2").style.visibility = "visible";

  myTimeout = setTimeout(myGreeting3Step2, 2500);
}

// TIME DELAY FUNCTION OF STEP 2

function myGreeting1Step2() {
  document.querySelector("#arr2").style.visibility = "visible";
  document.querySelector("#trans2").style.visibility = "visible";

  myStopFunction();
}

function myGreeting2Step2() {
  document.querySelector("#arr3").style.visibility = "visible";
  document.querySelector("#trans3").style.visibility = "visible";

  myStopFunction();
}

function myGreeting3Step2() {
  document.querySelector("#next-to-step3").style.visibility = "visible";

  myStopFunction();
}

// STEP 3

function step3() {
  document.querySelector("#gif2").style.visibility = "hidden";
  document.querySelector("#next-to-step3").style.visibility = "hidden";
  document.querySelector("#step2").style.visibility = "hidden";

  document.querySelector("#step3").style.visibility = "visible";
  document.querySelector("#arr1-step3").style.visibility = "visible";
  document.querySelector("#trans1-step3").style.visibility = "visible";
}

function movebeaker1Step3() {
  document.querySelector("#png1-step3").style.visibility = "hidden";
  document.querySelector("#arr1-step3").style.visibility = "hidden";
  document.querySelector("#trans1-step3").style.visibility = "hidden";
  document.querySelector("#gif1-step3").style.visibility = "visible";

  myTimeout = setTimeout(myGreeting1Step3, 13500);
}

// TIME DELAY FUNCTION OF STEP 3

function myGreeting1Step3() {
  document.querySelector("#next-to-step4").style.visibility = "visible";

  myStopFunction();
}

// STEP 4

function step4() {
  document.querySelector("#step3").style.visibility = "hidden";
  document.querySelector("#gif1-step3").style.visibility = "hidden";
  document.querySelector("#next-to-step4").style.visibility = "hidden";

  document.querySelector("#step4").style.visibility = "visible";
  document.querySelector("#png1-step4").style.visibility = "visible";
  document.querySelector("#arr1-step4").style.visibility = "visible";
  document.querySelector("#trans1-step4").style.visibility = "visible";
}

function movebeaker1Step4() {
  document.querySelector("#arr1-step4").style.visibility = "hidden";
  document.querySelector("#trans1-step4").style.visibility = "hidden";
  document.querySelector("#png1-step4").style.visibility = "hidden";

  document.querySelector("#gif1-step4").style.visibility = "visible";

  myTimeout = setTimeout(myGreeting1Step4, 3000);
}

// TIME DELAY FUNCTIONS OF STEP 4

function myGreeting1Step4() {
  document.querySelector("#next-to-step5").style.visibility = "visible";

  myStopFunction();
}

// STEP 5

function step5() {
  document.querySelector("#step4").style.visibility = "hidden";
  document.querySelector("#gif1-step4").style.visibility = "hidden";
  document.querySelector("#next-to-step5").style.visibility = "hidden";

  document.querySelector("#step5").style.visibility = "visible";
  document.querySelector("#png1-step5").style.visibility = "visible";
  document.querySelector("#arr1-step5").style.visibility = "visible";
  document.querySelector("#trans1-step5").style.visibility = "visible";
}

function moveplate1Step5() {
  document.querySelector("#png1-step5").style.visibility = "hidden";
  document.querySelector("#arr1-step5").style.visibility = "hidden";
  document.querySelector("#trans1-step5").style.visibility = "hidden";

  document.querySelector("#gif1-step5").style.visibility = "visible";

  myTimeout = setTimeout(myGreeting1Step5, 2500);
}

function clickTare1Step5() {
  document.querySelector("#gif1-step5").style.visibility = "hidden";
  document.querySelector("#arr2-step5").style.visibility = "hidden";
  document.querySelector("#trans2-step5").style.visibility = "hidden";

  document.querySelector("#gif2-step5").style.visibility = "visible";

  myTimeout = setTimeout(myGreeting2Step5,2500);
}

// TIME DELAY FUNCTIONS OF STEP 5

function myGreeting1Step5() {
  document.querySelector("#arr2-step5").style.visibility = "visible";
  document.querySelector("#trans2-step5").style.visibility = "visible";

  myStopFunction();
}

function myGreeting2Step5(){
  document.querySelector("#next-to-step6").style.visibility = "visible";
}

// STEP 6

function step6(){
  document.querySelector("#step5").style.visibility = "hidden";
  document.querySelector("#gif2-step5").style.visibility = "hidden";
  document.querySelector("#next-to-step6").style.visibility = "hidden";

  document.querySelector("#step6").style.visibility = "visible";
  document.querySelector("#png1-step6").style.visibility = "visible";
  document.querySelector("#arr1-step6").style.visibility = "visible";
  document.querySelector("#trans1-step6").style.visibility = "visible";
}

function moveplate1Step6() {
  document.querySelector("#png1-step6").style.visibility = "hidden";
  document.querySelector("#arr1-step6").style.visibility = "hidden";
  document.querySelector("#trans1-step6").style.visibility = "hidden";

  document.querySelector("#gif1-step6").style.visibility = "visible";

  myTimeout = setTimeout(myGreeting1Step6, 2500);
}

// TIME DELAY FUNCTIONS OF STEP 6

function myGreeting1Step6(){
  document.querySelector("#next-to-step7").style.visibility = "visible";

  myStopFunction();
}

// STEP 7

function step7(){
  document.querySelector("#step6").style.visibility = "hidden";
  document.querySelector("#gif1-step6").style.visibility = "hidden";
  document.querySelector("#next-to-step7").style.visibility = "hidden";

  document.querySelector("#step7").style.visibility = "visible";
  document.querySelector("#png1-step7").style.visibility = "visible";
  document.querySelector("#arr1-step7").style.visibility = "visible";
  document.querySelector("#trans1-step7").style.visibility = "visible";
}