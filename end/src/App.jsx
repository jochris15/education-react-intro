import { useState } from "react"
import productJson from '../product.json'

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState('')
  const [page, setPage] = useState('login')
  const [products, setProducts] = useState(productJson)

  return (
    <>
      {/* Navbar */}
      <nav className="navbar sticky top-0 z-10 p-3 bg-gray-100 shadow">
        <div className="navbar-start">
          <a className="text-2xl font-bold px-6" onClick={() => setPage('login')}>
            <span className="text-blue-300">Login</span>
          </a>
        </div>
        <div className="navbar-center">
          <a className="text-2xl font-bold px-6" onClick={() => setPage('home')}>
            <span className="text-accent">Home</span>
          </a>
        </div>
        <div className="navbar-end">
          <a className="text-2xl font-bold px-6">
            <span className="text-red-300">Logout</span>
          </a>
        </div>
      </nav>

      {/* form login */}
      {page == 'login' && (
        <>
          <div className="flex flex-col justify-center bg-base-100 p-20">
            <div className="w-full p-6 m-auto rounded-lg shadow-md lg:max-w-lg bg-base-200">
              <h1 className="text-3xl font-semibold text-center text-accent-focus">
                Log In
              </h1>

              <form className="space-y-4">
                <div>
                  <label className="label">
                    <span className="text-base label-text">Email</span>
                  </label>
                  <input type="text" autoComplete="email" placeholder="Enter Email" className="w-full input input-bordered input-accent" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                  <label className="label">
                    <span className="text-base label-text">Password</span>
                  </label>
                  <input type="password" autoComplete="current-password" placeholder="Enter Password"
                    className="w-full input input-bordered input-accent" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                  <button className="btn btn-accent w-full mt-5">Log In</button>
                </div>
              </form>

              <div className="flex flex-col items-center mt-5">
                <b>Email : {email}</b>
                <b>Password : {password}</b>
              </div>
            </div>
          </div>
        </>
      )}

      {/* home */}
      {page == 'home' && (
        <>
          <div id="PAGE-HOME" className="p-5">
            <main className="grid grid-cols-2 gap-5 my-8 bg-white px-10">
              {products.map((product) => {
                return (
                  <>
                    <div className="card bg-gray-100 shadow-2xl p-5 flex flex-row ">
                      <div className="flex flex-1">
                        <img src={product.imgUrl} alt="product image" className="w-3/4" />
                      </div>
                      <div className="flex flex-1 flex-col ml-10">
                        <b className="mb-5">{product.name}</b>
                        <p>
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </>
                )
              })}
            </main>
          </div>
        </>
      )}
    </>
  )
}

export default App
