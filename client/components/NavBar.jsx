export default function NavBar() {
  return (
    <nav className="navbar is-primary" role="navigation" height="40">
      <div className="navbar-brand">
        <a className="navbar-item" href="http://localhost:3000">
          <img src="../static/logo-filler.png" />
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <span className="navbar-item">This is home to future search bar.</span>
        </div>
        <div className="navbar-end">
          <a className="navbar-item">
            <img src="../static/shoppingCart-icon.png" />
          </a>
          <a className="navbar-item">
            <img src="../static/user-icon.png" />
          </a>
        </div>
      </div>
    </nav>
  )
}
