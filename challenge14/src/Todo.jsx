export const Todo = ({ name }) => {
  return (
    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-between">
        <span className="align-self-center">{name}</span>
        <button className="btn btn-danger">Borrar</button>
      </li>
    </ul>
  );
};
