import { Link } from 'react-router-dom';

const Navigation = () => {
  console.log('TEST');
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
