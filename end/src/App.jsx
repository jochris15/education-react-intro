import { useState } from "react"
import productJson from '../product.json'

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState('')
  const [page, setPage] = useState('login')
  const [products, setProducts] = useState(productJson)

  return (
    <>
      <div className="p-5">
        {/* navbar */}
        <nav className="sticky top-0 z-10 p-3 bg-purple-400 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]">
          <div>
            <a className="text-2xl font-bold px-6 cursor-pointer">
              <span>Home</span>
            </a>
            <a className="text-2xl font-bold px-6 cursor-pointer">
              <span>Front-end Intro</span>
            </a>
            <a className="text-2xl font-bold px-6 cursor-pointer">
              <span>Logout</span>
            </a>
          </div>
        </nav>
        <br />

        {/* login */}
        <div className="min-h-screen flex items-center justify-center w-full">
          <div className="rounded-lg px-8 py-6 w-1/3 bg-blue-400 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
            <form action="#">
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium ">
                  Email Address : <b>{email}</b>
                </label>
                <input
                  type="email"
                  id="email"
                  className="rounded-2xl w-full px-3 py-2 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                  placeholder="your@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password : <b>{password}</b>
                </label>
                <input
                  type="password"
                  id="password"
                  className="rounded-2xl w-full px-3 py-2 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="w-full mt-5 justify-center py-2 px-4 border-2 border-black rounded-2xl text-sm font-medium text-white bg-gray-700 hover:bg-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                Login
              </button>
            </form>
          </div>
        </div>

        {/* home */}
        <div id="PAGE-HOME" className="min-h-screen flex items-center justify-center">
          <main className="my-5 bg-white grid grid-cols-4 gap-5">
            {products.map((product) => {
              return (
                <>
                  {/* card */}
                  <div className="h-full flex flex-col flex-start items-center bg-yellow-400 border-2 border-black p-5 rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                    <div>
                      <img
                        src={product.imgUrl}
                        alt="product image"
                        className="border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                      />
                    </div>
                    <div className="flex flex-col divide-y divide-black">
                      <b className="mt-5">{product.name}</b>
                      <p>
                        {product.description.length > 100 ? product.description.substring(0, 100) + " . . ." : product.description}
                      </p>
                    </div>
                  </div>
                </>
              )
            })}
          </main>
        </div>

      </div>
    </>
  )
}

export default App
