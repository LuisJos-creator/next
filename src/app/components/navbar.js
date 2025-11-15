
export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-lg">
          <li><a href="/">inicio</a></li>
          <li><a href="/pages/nosotros">nosotros</a></li>
          <li><a href="/pages/productos">productos</a></li>
          <li><a href="/pages/servicios">sevicios</a></li>
        </ul>
      </div>
    </div>
  );
}