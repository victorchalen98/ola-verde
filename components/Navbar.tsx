export default function Navbar() {
  const links = [
    { href: "#", label: "Inicio" },
    { href: "#", label: "Clases y precios" },
    { href: "#", label: "Condiciones del mar" },
    { href: "#", label: "Contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-surface0/80 bg-mantle/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#">
            <span className="font-bold">Ola Verde</span> <br /> 
            <span>Surf School</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

          <div>
            <a href=""
            className="bg-[#B8402F] rounded-full px-4 py-2.5 font-medium ">Reservar Clase</a>
          </div>
      </nav>
    </header>
  );
}