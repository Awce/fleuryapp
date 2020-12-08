import React from "react"
import { Link } from "gatsby"

const navItems = [
  {
    caption: "Nosotros",
    href: "/nosotros",
  },
  {
    caption: "Flores",
    href: "/flores",
  },
  {
    caption: "Ocaciones",
    href: "/ocaciones",
  },
  {
    caption: "Arreglos",
    href: "/arreglos",
  },
]

const Menu = () => {
  return (
    <nav className="items-center text-center text-green-600 uppercase">
      <ul className="flex">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              className="px-4 py-6 inline-block hover:text-green-300"
              to={item.href}
            >
              {item.caption}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
