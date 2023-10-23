import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
            <li className="nav-item">
            <NavLink className={(isActive)=>
                    isActive? 'nav-link active' : 'nav-link'
            } aria-current="page" to="/ejercicio1">Ejercicio1</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className={(isActive)=>
                    isActive? 'nav-link active' : 'nav-link'
            } aria-current="page" to="/ejercicio2">Ejercicio2</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className={(isActive)=>
                    isActive? 'nav-link active' : 'nav-link'
            } aria-current="page" to="/ejercicio3">Ejercicio3</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className={(isActive)=>
                    isActive? 'nav-link active' : 'nav-link'
            } aria-current="page" to="/ejercicio4">Ejercicio4</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className={(isActive)=>
                    isActive? 'nav-link active' : 'nav-link'
            } aria-current="page" to="/ejercicio5">Ejercicio5</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className={(isActive)=>
                    isActive? 'nav-link active' : 'nav-link'
            } aria-current="page" to="/ejercicio6">Ejercicio6</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className={(isActive)=>
                    isActive? 'nav-link active' : 'nav-link'
            } aria-current="page" to="/ejercicio7">Ejercicio7</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className={(isActive)=>
                    isActive? 'nav-link active' : 'nav-link'
            } aria-current="page" to="/ejercicio8">Ejercicio8</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className={(isActive)=>
                    isActive? 'nav-link active' : 'nav-link'
            } aria-current="page" to="/ejercicio9">Ejercicio9</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className={(isActive)=>
                    isActive? 'nav-link active' : 'nav-link'
            } aria-current="page" to="/ejercicio10">Ejercicio10</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className={(isActive)=>
                    isActive? 'nav-link active' : 'nav-link'
            } aria-current="page" to="/ejercicio11">Ejercicio11</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className={(isActive)=>
                    isActive? 'nav-link active' : 'nav-link'
            } aria-current="page" to="/ejercicio12">Ejercicio12</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className={(isActive)=>
                    isActive? 'nav-link active' : 'nav-link'
            } aria-current="page" to="/ejercicio13">Ejercicio13</NavLink>
            </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar