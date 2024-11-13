import { useState } from "react"

const Education = () => {
    const [school, setSchool] = useState("")
    const [major, setMajor] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [isEditing, setIsEditing] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted with:", { school, major, startDate, endDate })
        setIsEditing(false)
    }
    return (
        <div className="education">
            <h2>Education</h2>
            {isEditing ?
                (<form onSubmit={handleSubmit}>
                    <label>College</label>
                    <input
                        type="text"
                        value={school}
                        onChange={(event) => setSchool(event.target.value)}
                    />
                    <label>Major</label>
                    <input
                        type="text"
                        value={major}
                        onChange={(event) => setMajor(event.target.value)}
                    />
                    <label>Start Date</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(event) => setStartDate(event.target.value)}
                    />
                    <label>End Date</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(event) => setEndDate(event.target.value)}
                    />
                    <button type="submit">Submit</button>

                </form>
                ) : (<>
                    <p>School: {school}</p>
                    <p>Major: {major}</p>
                    <p>Start Date: {startDate}</p>
                    <p>End Date: {endDate}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </>)}
        </div>
    )
}

export default Education