import { createRoot } from "react-dom/client";

import "./styles/global.css";

import Router from "./Router";

const root = createRoot(document.getElementById("app"));
root.render(<Router />);