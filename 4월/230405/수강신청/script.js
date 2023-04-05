let selectMenu = document.testForm.major;
function displaySelect() {
  let selectedText = selectMenu.options[selectMenu.selectedIndex].innerText;
  alert("[" + selectedText + "]를 선택하셨습니다.");
}
