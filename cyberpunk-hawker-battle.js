const GAME_WIDTH = 760;
const GAME_HEIGHT = 820;
const BOARD_SIZE = 560;
const CELL_SIZE = BOARD_SIZE / 8;
const BOARD_X = (GAME_WIDTH - BOARD_SIZE) / 2;
const BOARD_Y = 148;
const CYAN = 'cyan';
const AMBER = 'amber';
const PIECE_LABELS = {
  king: 'K',
  queen: 'Q',
  rook: 'R',
  bishop: 'B',
  knight: 'N',
  pawn: 'P'
};
const POWER_NAMES = {
  king: "Chef's Guard",
  queen: 'Wok Whirl',
  rook: 'Flash-Fry',
  bishop: 'Spice Slip',
  knight: 'Chili Dash',
  pawn: 'Queue Jump'
};

let board = [];
let currentSide = CYAN;
let selectedPiece = null;
let selectedMoves = [];
let powerMode = false;
let gameResult = '';
let statusMessage = '';
let pieceSprites = [];
let resetButton;
let powerButton;

function setup() {
  const gameCanvas = new Canvas(GAME_WIDTH, GAME_HEIGHT);
  gameCanvas.parent('game');
  for (let index = 0; index < 32; index++) {
    const pieceSprite = new Sprite(0, 0, 48, 48);
    pieceSprite.diameter = 48;
    pieceSprite.physics = NONE;
    pieceSprite.textSize = 21;
    pieceSprite.stroke = '#111827';
    pieceSprite.visible = false;
    pieceSprites.push(pieceSprite);
  }
  resetGame();
}

function draw() {
  background('#101523');
  drawHeader();
  drawBoard();
  drawMoveHints();
  syncPieceSprites();
  drawControls();
  drawFooter();
}

function drawHeader() {
  noStroke();
  fill('#f7bd55');
  textAlign(CENTER, CENTER);
  textSize(27);
  textStyle(BOLD);
  text('HAWKER GRID // TURF WAR', GAME_WIDTH / 2, 31);

  textStyle(NORMAL);
  textSize(15);
  fill('#c7cede');
  const turnText = gameResult
    ? gameResult
    : `${sideName(currentSide)}'s turn${isKingInCheck(board, currentSide) ? ' — MASTER CHEF IN CHECK!' : ''}`;
  text(turnText, GAME_WIDTH / 2, 70);

  textSize(12);
  fill('#92a0b7');
  text('Capture the opposing Master Chef. Kings cannot be captured.', GAME_WIDTH / 2, 101);
}

function drawBoard() {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const isLight = (row + col) % 2 === 0;
      const cellX = BOARD_X + col * CELL_SIZE;
      const cellY = BOARD_Y + row * CELL_SIZE;
      noStroke();
      fill(isLight ? '#d9c9a5' : '#354459');
      rect(cellX, cellY, CELL_SIZE, CELL_SIZE);

      if (row === 7) {
        fill(isLight ? '#38445a' : '#e3d5b6');
        textSize(12);
        textAlign(CENTER, CENTER);
        text(String.fromCharCode(97 + col), cellX + CELL_SIZE - 10, cellY + CELL_SIZE - 9);
      }
      if (col === 0) {
        fill(isLight ? '#38445a' : '#e3d5b6');
        textSize(12);
        textAlign(CENTER, CENTER);
        text(String(8 - row), cellX + 9, cellY + 9);
      }
    }
  }
  noFill();
  stroke('#f7bd55');
  strokeWeight(3);
  rect(BOARD_X, BOARD_Y, BOARD_SIZE, BOARD_SIZE);
  strokeWeight(1);
}

function drawMoveHints() {
  if (!selectedPiece) return;
  for (const move of selectedMoves) {
    const centerX = BOARD_X + move.col * CELL_SIZE + CELL_SIZE / 2;
    const centerY = BOARD_Y + move.row * CELL_SIZE + CELL_SIZE / 2;
    noFill();
    stroke(move.isPower ? '#ff9b54' : '#52dfd0');
    strokeWeight(move.isPower ? 4 : 3);
    if (move.captureAt || board[move.row][move.col]) {
      circle(centerX, centerY, CELL_SIZE - 12);
    } else {
      fill(move.isPower ? '#ff9b54' : '#52dfd0');
      noStroke();
      circle(centerX, centerY, 13);
    }
  }
  noStroke();
  stroke('#ffe17a');
  strokeWeight(4);
  noFill();
  rect(
    BOARD_X + selectedPiece.col * CELL_SIZE + 3,
    BOARD_Y + selectedPiece.row * CELL_SIZE + 3,
    CELL_SIZE - 6,
    CELL_SIZE - 6
  );
  strokeWeight(1);
}

function syncPieceSprites() {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const piece = board[row][col];
      if (!piece) continue;
      const pieceSprite = piece.sprite;
      pieceSprite.x = BOARD_X + col * CELL_SIZE + CELL_SIZE / 2;
      pieceSprite.y = BOARD_Y + row * CELL_SIZE + CELL_SIZE / 2;
      pieceSprite.visible = true;
      pieceSprite.text = PIECE_LABELS[piece.type];
      pieceSprite.color = piece.side === CYAN ? '#52dfd0' : '#ff9b54';
      pieceSprite.stroke = '#101523';
    }
  }
  for (const pieceSprite of pieceSprites) {
    let active = false;
    for (let row = 0; row < 8 && !active; row++) {
      for (let col = 0; col < 8; col++) {
        if (board[row][col] && board[row][col].sprite === pieceSprite) {
          active = true;
          break;
        }
      }
    }
    pieceSprite.visible = active;
  }
}

function drawControls() {
  resetButton = { x: 530, y: 742, width: 206, height: 48 };
  powerButton = { x: 24, y: 742, width: 390, height: 48 };
  drawButton(resetButton, 'NEW MATCH', '#f7bd55', '#18202e');

  let powerLabel = 'SELECT A PIECE FOR ITS POWER';
  let buttonColor = '#39465c';
  if (selectedPiece) {
    const powerName = POWER_NAMES[selectedPiece.type];
    if (selectedPiece.powerUsed) {
      powerLabel = `${powerName.toUpperCase()} USED`;
    } else {
      powerLabel = powerMode ? `CANCEL ${powerName.toUpperCase()}` : `USE ${powerName.toUpperCase()}`;
      buttonColor = powerMode ? '#ff9b54' : '#52dfd0';
    }
  }
  drawButton(powerButton, powerLabel, buttonColor, '#101523');
}

function drawButton(button, label, buttonColor, labelColor) {
  noStroke();
  fill(buttonColor);
  rect(button.x, button.y, button.width, button.height, 9);
  fill(labelColor);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(14);
  text(label, button.x + button.width / 2, button.y + button.height / 2);
  textStyle(NORMAL);
}

function drawFooter() {
  noStroke();
  fill('#aeb9ca');
  textAlign(CENTER, CENTER);
  textSize(12);
  const hint = selectedPiece
    ? `${pieceName(selectedPiece)} • ${POWER_NAMES[selectedPiece.type]}: ${powerDescription(selectedPiece.type)}`
    : 'Tap a cyan or amber robot to see its moves. Powers are optional; pass the device after each turn.';
  text(hint, GAME_WIDTH / 2, 808);
}

function mousePressed() {
  if (gameResult) {
    if (pointInButton(mouseX, mouseY, resetButton)) resetGame();
    return false;
  }
  if (pointInButton(mouseX, mouseY, resetButton)) {
    resetGame();
    return false;
  }
  if (pointInButton(mouseX, mouseY, powerButton)) {
    togglePowerMode();
    return false;
  }

  const col = Math.floor((mouseX - BOARD_X) / CELL_SIZE);
  const row = Math.floor((mouseY - BOARD_Y) / CELL_SIZE);
  if (row < 0 || row >= 8 || col < 0 || col >= 8) return false;

  const chosenMove = selectedMoves.find(move => move.row === row && move.col === col);
  if (chosenMove) {
    playMove(chosenMove);
    return false;
  }

  const clickedPiece = board[row][col];
  if (clickedPiece && clickedPiece.side === currentSide) {
    selectPiece(clickedPiece);
  } else {
    selectedPiece = null;
    selectedMoves = [];
    powerMode = false;
  }
  return false;
}

function togglePowerMode() {
  if (!selectedPiece || selectedPiece.powerUsed) return;
  powerMode = !powerMode;
  selectedMoves = getLegalMoves(board, selectedPiece, powerMode);
}

function selectPiece(piece) {
  selectedPiece = piece;
  powerMode = false;
  selectedMoves = getLegalMoves(board, piece, false);
}

function playMove(move) {
  const piece = selectedPiece;
  if (move.captureAt) {
    removePieceAt(move.captureAt.row, move.captureAt.col);
  }
  if (!move.stays) {
    board[piece.row][piece.col] = null;
    const capturedPiece = board[move.row][move.col];
    if (capturedPiece) capturedPiece.sprite.visible = false;
    piece.row = move.row;
    piece.col = move.col;
    board[move.row][move.col] = piece;
  }
  piece.moved = true;
  if (move.isPower) piece.powerUsed = true;
  if (piece.type === 'pawn' && (piece.row === 0 || piece.row === 7)) {
    piece.type = 'queen';
  }

  currentSide = otherSide(currentSide);
  selectedPiece = null;
  selectedMoves = [];
  powerMode = false;
  updateGameResult();
}

function updateGameResult() {
  const moves = allLegalMoves(board, currentSide);
  const checked = isKingInCheck(board, currentSide);
  if (moves.length === 0) {
    gameResult = checked
      ? `${sideName(otherSide(currentSide))} WINS BY CHECKMATE!`
      : 'STALEMATE — THE HAWKER STALLS DRAW.';
    statusMessage = gameResult;
    return;
  }
  statusMessage = checked ? 'Master Chef in check!' : '';
}

function resetGame() {
  board = Array.from({ length: 8 }, () => Array(8).fill(null));
  currentSide = CYAN;
  selectedPiece = null;
  selectedMoves = [];
  powerMode = false;
  gameResult = '';
  statusMessage = '';
  let spriteIndex = 0;

  const backRank = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];
  for (let col = 0; col < 8; col++) {
    board[0][col] = makePiece(backRank[col], AMBER, 0, col, pieceSprites[spriteIndex++]);
    board[1][col] = makePiece('pawn', AMBER, 1, col, pieceSprites[spriteIndex++]);
    board[6][col] = makePiece('pawn', CYAN, 6, col, pieceSprites[spriteIndex++]);
    board[7][col] = makePiece(backRank[col], CYAN, 7, col, pieceSprites[spriteIndex++]);
  }
  syncPieceSprites();
}

function makePiece(type, side, row, col, sprite) {
  return { type, side, row, col, moved: false, powerUsed: false, sprite };
}

function getLegalMoves(gameBoard, piece, powersOnly) {
  const candidates = getPseudoMoves(gameBoard, piece, powersOnly);
  return candidates.filter(move => {
    const simulatedBoard = copyBoard(gameBoard);
    const simulatedPiece = simulatedBoard[piece.row][piece.col];
    applyMoveToBoard(simulatedBoard, simulatedPiece, move);
    if (isKingInCheck(simulatedBoard, piece.side)) return false;
    if (piece.type === 'king' && move.isPower) {
      const rowStep = Math.sign(move.row - piece.row);
      const colStep = Math.sign(move.col - piece.col);
      const middleRow = piece.row + rowStep;
      const middleCol = piece.col + colStep;
      if (!clearBetween(gameBoard, piece.row, piece.col, move.row, move.col)) return false;
      if (isSquareAttacked(gameBoard, middleRow, middleCol, otherSide(piece.side))) return false;
    }
    return true;
  });
}

function getPseudoMoves(gameBoard, piece, powersOnly) {
  const moves = [];
  const { row, col, type, side } = piece;
  const addTarget = (targetRow, targetCol, isPower = false, extra = {}) => {
    if (!isInsideBoard(targetRow, targetCol)) return;
    const target = gameBoard[targetRow][targetCol];
    if (target && (target.side === side || target.type === 'king')) return;
    moves.push({ row: targetRow, col: targetCol, isPower, ...extra });
  };
  const addRay = (directions, maxDistance = 7) => {
    for (const [rowStep, colStep] of directions) {
      for (let distance = 1; distance <= maxDistance; distance++) {
        const targetRow = row + rowStep * distance;
        const targetCol = col + colStep * distance;
        if (!isInsideBoard(targetRow, targetCol)) break;
        const target = gameBoard[targetRow][targetCol];
        if (!target) {
          moves.push({ row: targetRow, col: targetCol, isPower: false });
        } else {
          if (target.side !== side && target.type !== 'king') {
            moves.push({ row: targetRow, col: targetCol, isPower: false });
          }
          break;
        }
      }
    }
  };

  if (!powersOnly) {
    if (type === 'pawn') {
      const direction = side === CYAN ? -1 : 1;
      const startRow = side === CYAN ? 6 : 1;
      const nextRow = row + direction;
      if (isInsideBoard(nextRow, col) && !gameBoard[nextRow][col]) {
        moves.push({ row: nextRow, col, isPower: false });
        const secondRow = row + direction * 2;
        if (row === startRow && !piece.moved && !gameBoard[secondRow][col]) {
          moves.push({ row: secondRow, col, isPower: false });
        }
      }
      for (const offset of [-1, 1]) {
        const targetRow = row + direction;
        const targetCol = col + offset;
        if (!isInsideBoard(targetRow, targetCol)) continue;
        const target = gameBoard[targetRow][targetCol];
        if (target && target.side !== side && target.type !== 'king') {
          moves.push({ row: targetRow, col: targetCol, isPower: false });
        }
      }
    } else if (type === 'knight') {
      for (const [rowStep, colStep] of knightSteps()) {
        addTarget(row + rowStep, col + colStep);
      }
    } else if (type === 'bishop') {
      addRay(diagonalDirections());
    } else if (type === 'rook') {
      addRay(straightDirections());
    } else if (type === 'queen') {
      addRay(allDirections());
    } else if (type === 'king') {
      for (const [rowStep, colStep] of allDirections()) {
        addTarget(row + rowStep, col + colStep);
      }
    }
  }

  if (!powersOnly || piece.powerUsed) return moves;
  if (type === 'pawn') {
    const direction = side === CYAN ? -1 : 1;
    const destinationRow = row + direction * 3;
    if (isInsideBoard(destinationRow, col) &&
        !gameBoard[destinationRow][col] &&
        !gameBoard[row + direction][col] &&
        !gameBoard[row + direction * 2][col]) {
      moves.push({ row: destinationRow, col, isPower: true });
    }
  } else if (type === 'rook') {
    for (const [rowStep, colStep] of straightDirections()) {
      for (let distance = 1; distance <= 3; distance++) {
        const targetRow = row + rowStep * distance;
        const targetCol = col + colStep * distance;
        if (!isInsideBoard(targetRow, targetCol)) break;
        const target = gameBoard[targetRow][targetCol];
        if (target && target.side !== side && target.type !== 'king') {
          moves.push({
            row: targetRow,
            col: targetCol,
            isPower: true,
            stays: true,
            captureAt: { row: targetRow, col: targetCol }
          });
        }
      }
    }
  } else if (type === 'knight') {
    for (const [rowStep, colStep] of allDirections()) {
      addTarget(row + rowStep, col + colStep, true);
    }
  } else if (type === 'bishop') {
    for (const [rowStep, colStep] of diagonalDirections()) {
      for (let distance = 2; distance <= 3; distance++) {
        addTarget(row + rowStep * distance, col + colStep * distance, true);
      }
    }
  } else if (type === 'queen') {
    for (const [rowStep, colStep] of knightSteps()) {
      addTarget(row + rowStep, col + colStep, true);
    }
  } else if (type === 'king') {
    for (const [rowStep, colStep] of allDirections()) {
      addTarget(row + rowStep * 2, col + colStep * 2, true);
    }
  }
  return moves;
}

function allLegalMoves(gameBoard, side) {
  const moves = [];
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const piece = gameBoard[row][col];
      if (piece && piece.side === side) {
        moves.push(...getLegalMoves(gameBoard, piece, false));
        if (!piece.powerUsed) moves.push(...getLegalMoves(gameBoard, piece, true));
      }
    }
  }
  return moves;
}

function isKingInCheck(gameBoard, side) {
  const king = findKing(gameBoard, side);
  return king ? isSquareAttacked(gameBoard, king.row, king.col, otherSide(side)) : true;
}

function isSquareAttacked(gameBoard, targetRow, targetCol, bySide) {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const piece = gameBoard[row][col];
      if (!piece || piece.side !== bySide) continue;
      const rowGap = targetRow - row;
      const colGap = targetCol - col;

      if (piece.type === 'pawn') {
        const direction = bySide === CYAN ? -1 : 1;
        if (rowGap === direction && Math.abs(colGap) === 1) return true;
      } else if (piece.type === 'knight') {
        if (Math.abs(rowGap) * Math.abs(colGap) === 2) return true;
        if (!piece.powerUsed && Math.max(Math.abs(rowGap), Math.abs(colGap)) === 1) return true;
      } else if (piece.type === 'king') {
        if (Math.max(Math.abs(rowGap), Math.abs(colGap)) === 1) return true;
        if (!piece.powerUsed && isTwoStepDirection(rowGap, colGap) &&
            clearBetween(gameBoard, row, col, targetRow, targetCol)) return true;
      } else {
        const straight = rowGap === 0 || colGap === 0;
        const diagonal = Math.abs(rowGap) === Math.abs(colGap);
        if (piece.type === 'rook' && straight && rayIsClear(gameBoard, row, col, targetRow, targetCol)) return true;
        if (piece.type === 'bishop' && diagonal && rayIsClear(gameBoard, row, col, targetRow, targetCol)) return true;
        if (piece.type === 'queen' && (straight || diagonal) &&
            rayIsClear(gameBoard, row, col, targetRow, targetCol)) return true;
        if (!piece.powerUsed && piece.type === 'rook' && straight &&
            Math.abs(rowGap) + Math.abs(colGap) <= 3 && rowGap + colGap !== 0) return true;
        if (!piece.powerUsed && piece.type === 'bishop' && diagonal &&
            Math.max(Math.abs(rowGap), Math.abs(colGap)) <= 3 &&
            Math.max(Math.abs(rowGap), Math.abs(colGap)) >= 2) return true;
        if (!piece.powerUsed && piece.type === 'queen' &&
            Math.abs(rowGap) * Math.abs(colGap) === 2) return true;
      }
    }
  }
  return false;
}

function applyMoveToBoard(gameBoard, piece, move) {
  if (move.captureAt) gameBoard[move.captureAt.row][move.captureAt.col] = null;
  if (!move.stays) {
    gameBoard[piece.row][piece.col] = null;
    piece.row = move.row;
    piece.col = move.col;
    gameBoard[move.row][move.col] = piece;
  }
  if (move.isPower) piece.powerUsed = true;
  if (piece.type === 'pawn' && (piece.row === 0 || piece.row === 7)) piece.type = 'queen';
}

function copyBoard(gameBoard) {
  return gameBoard.map(row => row.map(piece => piece ? { ...piece } : null));
}

function removePieceAt(row, col) {
  const capturedPiece = board[row][col];
  if (capturedPiece) capturedPiece.sprite.visible = false;
  board[row][col] = null;
}

function findKing(gameBoard, side) {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const piece = gameBoard[row][col];
      if (piece && piece.side === side && piece.type === 'king') return piece;
    }
  }
  return null;
}

function rayIsClear(gameBoard, fromRow, fromCol, toRow, toCol) {
  const rowStep = Math.sign(toRow - fromRow);
  const colStep = Math.sign(toCol - fromCol);
  let row = fromRow + rowStep;
  let col = fromCol + colStep;
  while (row !== toRow || col !== toCol) {
    if (gameBoard[row][col]) return false;
    row += rowStep;
    col += colStep;
  }
  return true;
}

function clearBetween(gameBoard, fromRow, fromCol, toRow, toCol) {
  const rowStep = Math.sign(toRow - fromRow);
  const colStep = Math.sign(toCol - fromCol);
  const middleRow = fromRow + rowStep;
  const middleCol = fromCol + colStep;
  return !gameBoard[middleRow][middleCol];
}

function isTwoStepDirection(rowGap, colGap) {
  return Math.max(Math.abs(rowGap), Math.abs(colGap)) === 2 &&
    Math.min(Math.abs(rowGap), Math.abs(colGap)) <= 2;
}

function pointInButton(x, y, button) {
  return button && x >= button.x && x <= button.x + button.width &&
    y >= button.y && y <= button.y + button.height;
}

function isInsideBoard(row, col) {
  return row >= 0 && row < 8 && col >= 0 && col < 8;
}

function sideName(side) {
  return side === CYAN ? 'CYAN' : 'AMBER';
}

function otherSide(side) {
  return side === CYAN ? AMBER : CYAN;
}

function pieceName(piece) {
  return `${sideName(piece.side)} ${piece.type.toUpperCase()}`;
}

function powerDescription(type) {
  const descriptions = {
    king: 'move two squares in any direction if the route is clear',
    queen: 'make a knight-shaped jump',
    rook: 'flash-fry an enemy up to three squares away, through blockers',
    bishop: 'slip diagonally up to three squares, over blockers',
    knight: 'dash one square in any direction',
    pawn: 'queue-jump three clear squares forward'
  };
  return descriptions[type];
}

function knightSteps() {
  return [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]];
}

function straightDirections() {
  return [[-1, 0], [1, 0], [0, -1], [0, 1]];
}

function diagonalDirections() {
  return [[-1, -1], [-1, 1], [1, -1], [1, 1]];
}

function allDirections() {
  return [...straightDirections(), ...diagonalDirections()];
}
