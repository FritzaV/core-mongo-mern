import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <div>
          <Link to="/">
            <p class="fs-4 text-decoration-underline" aria-current="page">Songs</p>
          </Link>
        </div>
        <div>
          <Link to="/playlists">
            <p class="fs-4" aria-current="page">Playlists</p>
          </Link>
        </div>
        <div>
          <Link to="/add/song">
            <p class="fs-4" aria-current="page">Add Song</p>
          </Link>
        </div>
        <div>
          <Link to="/add/playlists">
            <p class="fs-4" aria-current="page">Add Playlist</p>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header;