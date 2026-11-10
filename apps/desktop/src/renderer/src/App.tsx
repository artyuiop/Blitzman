import Versions from './components/Versions'

function App(): React.JSX.Element {
  return (
    <main>
      <h1>APIHub</h1>
      <p>Local Desktop API Development Platform</p>

      <section>
        <h2>Application Runtime</h2>
        <Versions />
      </section>
    </main>
  )
}

export default App