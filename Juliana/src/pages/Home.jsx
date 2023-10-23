import { NavLink } from "react-router-dom"

const Home = () => {
  return (
    <>
        <h1 className='text-center mt-5'>TRABAJO PRACTICO REACT</h1>
            <div className='container-fluid bg-dark mt-5 mb-5'>
            <div className='d-flex justify-content-center p-5 gap-3 row'>
              <button className='btn btn-light col-3 btn-home'>
                <NavLink className={(isActive)=>
                    isActive? 'nav-link active' : 'nav-link'
            } aria-current="page" to="/ejercicio1">Ejercicio1</NavLink>
              </button>
              <button className='btn btn-light col-3 btn-home'>
              <NavLink className={(isActive)=>
                    isActive? 'nav-link active' : 'nav-link'
            } aria-current="page" to="/ejercicio2">Ejercicio2</NavLink>
              </button>
              <button className='btn btn-light col-3 btn-home'>
              <NavLink className={(isActive)=>
                    isActive? 'nav-link active' : 'nav-link'
            } aria-current="page" to="/ejercicio3">Ejercicio3</NavLink>
              </button>
              <button className='btn btn-light col-3 btn-home'>
              <NavLink className={(isActive)=>
                    isActive? 'nav-link active' : 'nav-link'
            } aria-current="page" to="/ejercicio4">Ejercicio4</NavLink>
              </button>
              <button className='btn btn-light col-3 btn-home'>
              <NavLink className={(isActive)=>
                    isActive? 'nav-link active' : 'nav-link'
            } aria-current="page" to="/ejercicio5">Ejercicio5</NavLink>
              </button>
              <button className='btn btn-light col-3 btn-home'>
              <NavLink className={(isActive)=>
                    isActive? 'nav-link active' : 'nav-link'
            } aria-current="page" to="/ejercicio6">Ejercicio6</NavLink>
              </button>
              <button className='btn btn-light col-3 btn-home'>
              <NavLink className={(isActive)=>
                    isActive? 'nav-link active' : 'nav-link'
            } aria-current="page" to="/ejercicio7">Ejercicio7</NavLink>
              </button>
              <button className='btn btn-light col-3 btn-home'>
              <NavLink className={(isActive)=>
                    isActive? 'nav-link active' : 'nav-link'
            } aria-current="page" to="/ejercicio8">Ejercicio8</NavLink>
              </button>
              <button className='btn btn-light col-3 btn-home'>
              <NavLink className={(isActive)=>
                    isActive? 'nav-link active' : 'nav-link'
            } aria-current="page" to="/ejercicio9">Ejercicio9</NavLink>
              </button>
              <button className='btn btn-light col-3 btn-home'>
              <NavLink className={(isActive)=>
                    isActive? 'nav-link active' : 'nav-link'
            } aria-current="page" to="/ejercicio10">Ejercicio10</NavLink>
              </button>
              <button className='btn btn-light col-3 btn-home'>
              <NavLink className={(isActive)=>
                    isActive? 'nav-link active' : 'nav-link'
            } aria-current="page" to="/ejercicio11">Ejercicio11</NavLink>
            </button>
              <button className='btn btn-light col-3'>
                <NavLink className={(isActive)=>
                    isActive? 'nav-link active' : 'nav-link'
            } aria-current="page" to="/ejercicio12">Ejercicio12</NavLink>
              </button>
              <button className='btn btn-light col-3'>
              <NavLink className={(isActive)=>
                    isActive? 'nav-link active' : 'nav-link'
            } aria-current="page" to="/ejercicio13">Ejercicio13</NavLink>
              </button>
            </div>
            </div>
    </>
  )
}

export default Home