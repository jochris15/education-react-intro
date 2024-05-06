import { useState } from "react"

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [page, setPage] = useState('login')
  const [products, setProducts] = useState([
    {
      "id": 1,
      "name": "credo",
      "description": "Pedro pedro cur commodo quaerat adicio coadunatio. Tergiversatio admitto casus vindico atqui aperiam corrupti. Arguo acies cauda sopor despecto sol delectus.",
      "price": 933918,
      "stock": 39,
      "imgUrl": "https://picsum.photos/seed/DXQs6olFa/100/100",
      "categoryId": 5,
      "authorId": 1,
      "createdAt": "2024-01-08T08:48:04.240Z",
      "updatedAt": "2024-01-16T08:34:47.860Z",
      "Category": {
        "id": 5,
        "name": "molestiae",
        "createdAt": "2024-01-08T08:48:03.891Z",
        "updatedAt": "2024-01-08T08:48:03.891Z"
      }
    },
    {
      "id": 2,
      "name": "deripio",
      "description": "Administratio cur commodo quaerat adicio coadunatio. Tergiversatio admitto casus vindico atqui aperiam corrupti. Arguo acies cauda sopor despecto sol delectus.",
      "price": 645429,
      "stock": 26,
      "imgUrl": "https://loremflickr.com/100/100?lock=1784188751577088",
      "categoryId": 9,
      "authorId": 9,
      "createdAt": "2024-01-08T08:48:04.241Z",
      "updatedAt": "2024-01-08T08:48:04.241Z",
      "Category": {
        "id": 9,
        "name": "confido",
        "createdAt": "2024-01-08T08:48:04.164Z",
        "updatedAt": "2024-01-08T08:48:04.164Z"
      }
    },
    {
      "id": 3,
      "name": "dolores",
      "description": "Antea adicio succedo bestia aro. Adfero accendo suffragium ventus abduco venia. Vulnero denuo dedico.",
      "price": 997976,
      "stock": 57,
      "imgUrl": "https://picsum.photos/seed/ltij70mU/100/100",
      "categoryId": 5,
      "authorId": 9,
      "createdAt": "2024-01-08T08:48:04.241Z",
      "updatedAt": "2024-01-08T08:48:04.241Z",
      "Category": {
        "id": 5,
        "name": "molestiae",
        "createdAt": "2024-01-08T08:48:03.891Z",
        "updatedAt": "2024-01-08T08:48:03.891Z"
      }
    },
    {
      "id": 4,
      "name": "tergum",
      "description": "Sto antepono defungo confero error provident angustus. Vae uberrime callide summisse. Deduco ultio cimentarius.",
      "price": 220085,
      "stock": 56,
      "imgUrl": "https://loremflickr.com/100/100?lock=1516564245381120",
      "categoryId": 5,
      "authorId": 4,
      "createdAt": "2024-01-08T08:48:04.241Z",
      "updatedAt": "2024-01-08T08:48:04.241Z",
      "Category": {
        "id": 5,
        "name": "molestiae",
        "createdAt": "2024-01-08T08:48:03.891Z",
        "updatedAt": "2024-01-08T08:48:03.891Z"
      }
    },
    {
      "id": 5,
      "name": "comis",
      "description": "Ventosus absum bis vulgo verecundia. Blanditiis vinco temeritas suppono supra utpote accedo tubineus. Sustineo officia atque contigo.",
      "price": 462039,
      "stock": 63,
      "imgUrl": "https://loremflickr.com/100/100?lock=6859192212127744",
      "categoryId": 6,
      "authorId": 7,
      "createdAt": "2024-01-08T08:48:04.241Z",
      "updatedAt": "2024-01-08T08:48:04.241Z",
      "Category": {
        "id": 6,
        "name": "mollitia",
        "createdAt": "2024-01-08T08:48:03.959Z",
        "updatedAt": "2024-01-08T08:48:03.959Z"
      }
    },
    {
      "id": 6,
      "name": "carmen",
      "description": "Sumo voluptatibus comptus tot autus vito vix ipsam libero. Timidus beatae acceptus voluptatem possimus condico strenuus asperiores. Charisma clamo vehemens allatus sint quo.",
      "price": 900964,
      "stock": 11,
      "imgUrl": "https://loremflickr.com/100/100?lock=4847748205510656",
      "categoryId": 6,
      "authorId": 7,
      "createdAt": "2024-01-08T08:48:04.241Z",
      "updatedAt": "2024-01-08T08:48:04.241Z",
      "Category": {
        "id": 6,
        "name": "mollitia",
        "createdAt": "2024-01-08T08:48:03.959Z",
        "updatedAt": "2024-01-08T08:48:03.959Z"
      }
    }
  ])

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

      {/* Form Login */}
      {page == 'login' && (
        <>
          <div className="flex flex-col justify-center bg-base-100 p-20" >
            <div className="w-full p-6 m-auto rounded-lg shadow-md lg:max-w-lg bg-base-200">
              <h1 className="text-3xl font-semibold text-center text-accent-focus">
                Log In
              </h1>

              <form className="space-y-4">
                <div>
                  <label className="label">
                    <span className="text-base label-text">Email</span>
                  </label>
                  <input type="text" placeholder="Enter Email" autoComplete="email" className="w-full input input-bordered input-accent" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                  <label className="label">
                    <span className="text-base label-text">Password</span>
                  </label>
                  <input type="password" placeholder="Enter Password" autoComplete="current-password"
                    className="w-full input input-bordered input-accent" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                  <button className="btn btn-accent w-full mt-5">Log In</button>
                </div>
              </form>
              <div className="flex flex-col items-center p-5">
                <b>Email : {email}</b>
                <b>Password : {password}</b>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Home */}
      {page == 'home' && (
        <>
          <div id="PAGE-HOME" className="p-5">
            <main className="grid grid-cols-2 gap-5 my-8 bg-white px-10">
              {products.map((product) => {
                return (
                  <>
                    <div className="card bg-gray-100 shadow-2xl p-10 flex flex-row ">
                      <div className="flex flex-1">
                        <img src={product.imgUrl} alt="product image" className="w-3/4" />
                      </div>
                      <div className="flex flex-1 flex-col">
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
