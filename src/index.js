import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from './Experience'
import BasicExample from './components/BasicExample'
import PlacementExample from "./components/PlacementExample";
import { Auth } from "./components/auth";
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<>
<Auth />
<Canvas>
<Experience />
</Canvas>
<BasicExample />
<PlacementExample />

</>
);
