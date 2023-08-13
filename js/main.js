// clone value from input
function copyValue() {
  let inputValue1 = document.getElementById("inputField_1").value;
  let inputValue2 = document.getElementById("inputField_2").value;
  let inputValue3 = document.getElementById("inputField_3").value;
  document.getElementById("outputField_1").textContent = inputValue1;
  document.getElementById("outputField_2").textContent = inputValue2;
  document.getElementById("outputField_3").textContent = inputValue3;
}
// print content
function printDiv(content_area) {
  // let printContents = document.querySelector('.result').innerHTML;
  // let originalContents = document.body.innerHTML;
  // document.body.innerHTML = printContents;
  window.print();
  // document.body.innerHTML = originalContents;
}