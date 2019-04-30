$('.pointer-starting-point-btn').on('click', function (e) {
    e.preventDefault();
    outputVariantsMovesInPopup();
});

$('.moves-popup-btn-close').on('click', function (e) {
    e.preventDefault();
    $('.moves-popup').hide();
});

function outputVariantsMovesInPopup() {
    let originalPosition = $('#original-position').val().toUpperCase();
    $('.moves')[0].innerHTML = '';
    calculateMoves(originalPosition).forEach(value => { $('.moves').append(value + ' '); });
    $('.moves-popup').show();
}

function calculateMoves(originalPosition) {
    let moves = [];
    let positionX = originalPosition[0].charCodeAt();
    let positionY = Number(originalPosition[1]);
    if (!(positionX > 'H'.charCodeAt() || positionY > 8 || positionY < 1)) {
        let movesX = [2, 1, -1, -2, -2, -1, 1, 2];
        let movesY = [1, 2, 2, 1, -1, -2, -2, -1];

        for (let index = 0; index < movesX.length; index++) {
            let x = positionX + movesX[index];
            let y = positionY + movesY[index];

            if (x <= 'H'.charCodeAt() && x >= 'A'.charCodeAt() && y <= 8 && y >= 1) {
                moves.push(String.fromCharCode(x) + y);
            }
        }
    }
    return moves;
    
}