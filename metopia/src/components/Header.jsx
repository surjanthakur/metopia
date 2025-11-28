import { NavLink } from 'react-router-dom'
import './header.css'
export default function Header() {
  return (
    <>
      <header className="sticky top-0 left-0 z-50">
        <nav className="w-20 flex-row  justify-evenly">
          <h1 className="brand-name">Metopia</h1>
          <div>
            <NavLink className="creator text-white" to="/creators">
              for Creators
            </NavLink>
            <NavLink className="brands text-white" to="/brands">
              for Brands
            </NavLink>
            <NavLink className="blog text-white" to="/blog">
              Blog
            </NavLink>
            <NavLink className="about text-white" to="/about">
              About
            </NavLink>
          </div>
          <div>
            <button>Log in </button>
            <button>Book a Demo</button>
          </div>
        </nav>
      </header>
    </>
  )
}
