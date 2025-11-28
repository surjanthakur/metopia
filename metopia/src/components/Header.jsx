import { NavLink } from 'react-router-dom'
import './header.css'

export default function Header() {
  return (
    <header className="sticky top-0 left-0 z-50 header-container backdrop-blur-md">
      <nav className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 h-auto md:h-20">
        {/* BRAND */}
        <h1 className="text-amber-50 brand-name text-xl sm:text-2xl md:text-3xl font-bold py-3 md:py-0 cursor-pointer">
          <i className="fa-brands fa-angellist"></i>&nbsp;Metopia
        </h1>

        {/* LINK GROUP */}
        <div className="all-routes flex flex-col sm:flex-row items-center gap-3 sm:gap-6 md:gap-9 text-sm sm:text-base">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'text-[#ffd6a5] font-semibold'
                : 'text-white hover:text-[#ffd6a5] transition'
            }
            to="/creators"
          >
            for Creators
          </NavLink>

          <button className="text-white brands hover:text-[#ffd6a5] transition">
            Brands <i className="fa-solid fa-angle-down text-xs"></i>
          </button>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'text-[#ffd6a5] font-semibold'
                : 'text-white  transition'
            }
            to="/blog"
          >
            Blog
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'text-[#ffd6a5] font-semibold'
                : 'text-white  transition'
            }
            to="/about"
          >
            About
          </NavLink>
        </div>

        {/* AUTH ROUTES */}
        <div className="auth-routes flex flex-col sm:flex-row items-center gap-3 sm:gap-5 text-sm sm:text-base mt-3 md:mt-0">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? 'text-[#ffd6a5]'
                : 'text-white hover:text-[#ffd6a5] transition'
            }
          >
            Login
          </NavLink>

          <NavLink
            to="/book-demo"
            className="px-3 py-1.5 demo rounded-md border border-white/30 hover:bg-white/10 transition"
          >
            Book Demo <i className="fa-solid fa-phone-volume"></i>
          </NavLink>

          <span className="text-white text-xs sm:text-sm cursor-pointer">
            <i className="fa-solid fa-earth-americas"></i> En{' '}
            <i className="fa-solid fa-angle-down text-xs"></i>
          </span>
        </div>
      </nav>
    </header>
  )
}
