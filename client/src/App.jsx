import { Welcome, Footer, Navbar, Services, Transactions } from './components/index';

function App() {
  return (
    <>
      <h1 className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome />
        </div>
        <Services />
        <Transactions />
        <Footer />
      </h1>
    </>
  )
}

export default App
