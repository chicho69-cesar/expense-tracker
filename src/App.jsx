import Background from './components/ui/background'
import Providers from './context/providers'
import Router from './routers/router'

export default function App() {
  return (
    <>
      <Providers>
        <Router />
        
        <Background />
      </Providers>
    </>
  )
}
