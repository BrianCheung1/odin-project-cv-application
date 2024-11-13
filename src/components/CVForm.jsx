import Education from "./Education"
import General from "./General"
import Work from "./Work"
import "../css/CVForm.css"
const CVForm = () => {
    return (
        <div className="cv-form">
            <h1>CV Form</h1>
            <General />
            <Education />
            <Work />
        </div>
    )
}

export default CVForm