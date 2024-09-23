import React, { useState } from 'react';

export default function AddNewLearningPath() {
  const [unitNumber, setUnitNumber] = useState(1);
  const [unitName, setUnitName] = useState("");
  const [topics, setTopics] = useState([{ topicName: "", day: 1 }]);
  const [allUnits, setAllUnits] = useState([]);
  const [globalDay, setGlobalDay] = useState(1); // Global day counter

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Save current unit details into the array
    const newUnit = {
      unitNumber,
      unitName,
      topics: [...topics], // Save the topics
    };

    setAllUnits([...allUnits, newUnit]);

    // Reset form for the next unit, but days will not reset
    setUnitNumber(unitNumber + 1);
    setUnitName("");
    setTopics([{ topicName: "", day: globalDay + 1 }]);
    setGlobalDay(globalDay+1);
  };

  // Handle change in topics
  const handleTopicChange = (index, event) => {
    const newTopics = [...topics];
    newTopics[index][event.target.name] = event.target.value;
    setTopics(newTopics);
  };

  // Add a new topic and automatically assign the next global day
  const addTopic = () => {
    const nextDay = globalDay + 1; // Automatically allocate the next global day
    setTopics([...topics, { topicName: "", day: nextDay }]);
    setGlobalDay(nextDay); // Increment the global day counter
  };

  // Remove the last topic and adjust days accordingly
  const removeLastTopic = () => {
    
    if (topics.length >= 1) {
        const newTopics = topics.slice(0, -1); // Remove the last topic
    
        
        setGlobalDay(globalDay-1);
        setTopics(newTopics);
        
      }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Unit Number:</label>
          <input
            type="number"
            value={unitNumber}
            onChange={(e) => setUnitNumber(Number(e.target.value))}
            required
          />
        </div>

        <div>
          <label>Unit Name:</label>
          <input
            type="text"
            value={unitName}
            onChange={(e) => setUnitName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Topics:</label>
          {topics.map((topic, index) => (
            <div key={index}>
              <label>Day {topic.day}</label>
              <input
                type="text"
                name="topicName"
                value={topic.topicName}
                onChange={(e) => handleTopicChange(index, e)}
                placeholder={`Topic ${index + 1}`}
                required
              />
              {/* Remove button only for the last topic */}
              {index === topics.length - 1 && (
                <button type="button" onClick={removeLastTopic}>
                  Remove
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={addTopic}>
            Add Topic
          </button>
        </div>

        <button type="submit">Save Unit & Add Next Unit</button>
      </form>

      {/* Display All Units */}
      <div>
        <h2>All Units</h2>
        <pre>{JSON.stringify(allUnits, null, 2)}</pre>
      </div>
    </div>
  );
}
