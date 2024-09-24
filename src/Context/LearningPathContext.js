import React, { createContext, useState } from 'react';


export const LearningPathContext = createContext();


export const LearningPathProvider = ({ children }) => {
    const [learningPaths, setLearningPaths] = useState([]);  
  
    return (
      <LearningPathContext.Provider value={{ learningPaths, setLearningPaths }}>
        {children}
      </LearningPathContext.Provider>
    );
};
