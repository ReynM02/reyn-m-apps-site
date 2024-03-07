import { Routes, Route } from "react-router-dom";
import TipCalculator from "./projects/TipCalculator";
import CatchTheObject from "./projects/CatchTheObject";
function Projects() {
    return(
        <>
            <div>
                <h3>Projects</h3>
            </div>
            <Routes>
                <Route path="/" element={<></>} />
                <Route path="/tip-calculator" element={<TipCalculator />} />
                <Route path="/catch-the-object" element={<CatchTheObject />} />
            </Routes>
        </>
    );
}

export default Projects;