"use client";

export default function Navbar() {
  const list = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full md:w-64">
      <ul className="flex flex-row md:flex-col justify-between md:items-end gap-4 md:gap-0">
        {list.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className="block w-auto md:w-full md:text-right py-2 font-header font-extralight tracking-tight hover:text-gray-600"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
