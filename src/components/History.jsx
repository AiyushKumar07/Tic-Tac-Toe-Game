const History = ({ history, moveTo, currentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, index) => (
          <li key={index}>
            <button
              type="button"
              className={`btn-move ${currentMove === index ? 'active' : ' '}`}
              style={{ color: currentMove === index ? 'red' : 'white' }}
              onClick={() => moveTo(index)}
            >
              {index === 0 ? 'Start New Game' : `Go-to Move ${index}`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default History;
