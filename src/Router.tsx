import { Routes, Route } from "react-router-dom";
import { About } from "./pages/About";

import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:pokemonId" element={<About />} />
      </Route>
    </Routes>
  );
}
