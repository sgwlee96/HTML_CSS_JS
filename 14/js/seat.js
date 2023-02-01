var memNum;
var colNum;
var rowNum;

memNum = prompt("입장객은 몇 명인가요?");
colNum = prompt("한 줄에 몇 명씩 앉습니까?");

if (memNum % colNum === 0) {
    rowNum = parseInt(memNum / colNum);
} else {
    rowNum = parseInt(memNum / colNum) + 1;
}

document.write("모두 " + rowNum + "개의 줄이 필요합니다.");


