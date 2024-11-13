import { useState } from "react";
import "../css/work.css"
const Work = () => {
    const [workEntries, setWorkEntries] = useState([]);

    const addWorkEntry = () => {
        setWorkEntries([...workEntries, { title: "", company: "", startDate: "", endDate: "", description: "", isEditing: true }]);
    };

    const updateWorkEntry = (index, updatedEntry) => {
        const updatedEntries = [...workEntries];
        updatedEntries[index] = updatedEntry;
        setWorkEntries(updatedEntries);
    };

    const handleSubmit = (event, index) => {
        event.preventDefault();
        const updatedEntries = [...workEntries];
        updatedEntries[index].isEditing = false;
        setWorkEntries(updatedEntries);
    };

    const handleDelete = (index) => {
        const updatedEntries = workEntries.filter((_, i) => i !== index);
        setWorkEntries(updatedEntries);
    };

    return (
        <div className="work">
            <h2>Work Experience</h2>
            {workEntries.map((entry, index) => (
                <div key={index} className="work-entry">
                    {entry.isEditing ? (
                        <form onSubmit={(e) => handleSubmit(e, index)}>
                            <label>Job Title</label>
                            <input
                                type="text"
                                value={entry.title}
                                onChange={(e) =>
                                    updateWorkEntry(index, { ...entry, title: e.target.value })
                                }
                            />
                            <label>Company</label>
                            <input
                                type="text"
                                value={entry.company}
                                onChange={(e) =>
                                    updateWorkEntry(index, { ...entry, company: e.target.value })
                                }
                            />
                            <label>Start Date</label>
                            <input
                                type="date"
                                value={entry.startDate}
                                onChange={(e) =>
                                    updateWorkEntry(index, { ...entry, startDate: e.target.value })
                                }
                            />
                            <label>End Date</label>
                            <input
                                type="date"
                                value={entry.endDate}
                                onChange={(e) =>
                                    updateWorkEntry(index, { ...entry, endDate: e.target.value })
                                }
                            />
                            <label>Description</label>
                            <textarea
                                value={entry.description}
                                onChange={(e) =>
                                    updateWorkEntry(index, { ...entry, description: e.target.value })
                                }
                                rows="4"
                                placeholder="Describe your responsibilities and achievements"
                            />
                            <button type="submit">Submit</button>
                        </form>
                    ) : (
                        <>
                            <p>Title: {entry.title}</p>
                            <p>Company: {entry.company}</p>
                            <p>Start Date: {entry.startDate}</p>
                            <p>End Date: {entry.endDate}</p>
                            <p>Description: {entry.description}</p>
                            <div className="work-buttons">
                                <button
                                    onClick={() =>
                                        updateWorkEntry(index, { ...entry, isEditing: true })
                                    }
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() =>
                                        handleDelete(index)
                                    }
                                >
                                    Delete
                                </button>
                            </div>
                        </>
                    )}
                </div>
            ))}
            <button onClick={addWorkEntry}>Add Work Entry</button>
        </div>
    );
};

export default Work;
