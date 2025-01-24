import { useContext } from "react";
import { ThemeProvider } from "../Hooks/UseContext";

const ExamResults=()=>{
    const res=useContext(ThemeProvider)
    return(
        <div>
            <h2>Result published your cgps is  {res.cgpa},your sgpa is {res.sgpa}</h2>
        </div>
    )
    }
    export default ExamResults;