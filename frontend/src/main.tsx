import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router'
import { App } from './App.js'

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
)
