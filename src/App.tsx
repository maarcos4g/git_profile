import { SearchContextProvider } from "./contexts/SearchContext"
import { Home } from "./pages/Home"

export function App() {
  return (
    <SearchContextProvider>
      <Home />
    </SearchContextProvider>
  )
}
