const Square = ({ value, onClick, iswinningSquare }) => {
  const colorClassName = value === 'X' ? 'text-green' : 'text-orange';
  const isWinning = iswinningSquare ? 'winning' : ' ';
  return (
    <button
      type="button"
      className={`square ${colorClassName} ${isWinning}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
