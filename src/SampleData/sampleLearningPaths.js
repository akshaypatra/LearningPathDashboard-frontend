const sampleLearningPaths = [
    {
      learningPathId: '1',
      subjectName: 'Computer Science',
      learningPath: [
        {
          unitNumber: 1,
          unitName: 'Introduction to Algorithms',
          topics: [
            { day: 1, topicName: 'Big-O Notation' },
            { day: 2, topicName: 'Sorting Algorithms' },
            { day: 3, topicName: 'Searching Algorithms' }
          ]
        },
        {
          unitNumber: 2,
          unitName: 'Data Structures',
          topics: [
            { day: 4, topicName: 'Arrays and Lists' },
            { day: 5, topicName: 'Stacks and Queues' },
            { day: 6, topicName: 'Trees and Graphs' }
          ]
        },
        {
          unitNumber: 3,
          unitName: 'Graph Algorithms',
          topics: [
            { day: 7, topicName: 'Breadth-First Search' },
            { day: 8, topicName: 'Depth-First Search' },
            { day: 9, topicName: 'Dijkstra’s Algorithm' }
          ]
        },
        {
          unitNumber: 4,
          unitName: 'Dynamic Programming',
          topics: [
            { day: 10, topicName: 'Memoization' },
            { day: 11, topicName: 'Tabulation' },
            { day: 12, topicName: 'Longest Common Subsequence' }
          ]
        },
        {
          unitNumber: 5,
          unitName: 'Greedy Algorithms',
          topics: [
            { day: 13, topicName: 'Greedy Choice Property' },
            { day: 14, topicName: 'Huffman Coding' },
            { day: 15, topicName: 'Activity Selection' }
          ]
        }
      ]
    },
    {
      learningPathId: '2',
      subjectName: 'Mathematics',
      learningPath: [
        {
          unitNumber: 1,
          unitName: 'Linear Algebra',
          topics: [
            { day: 1, topicName: 'Matrices' },
            { day: 2, topicName: 'Eigenvectors and Eigenvalues' },
            { day: 3, topicName: 'Vector Spaces' }
          ]
        },
        {
          unitNumber: 2,
          unitName: 'Calculus',
          topics: [
            { day: 4, topicName: 'Limits and Continuity' },
            { day: 5, topicName: 'Derivatives' },
            { day: 6, topicName: 'Integrals' }
          ]
        },
        {
          unitNumber: 3,
          unitName: 'Probability',
          topics: [
            { day: 7, topicName: 'Random Variables' },
            { day: 8, topicName: 'Bayesian Probability' },
            { day: 9, topicName: 'Probability Distributions' }
          ]
        },
        {
          unitNumber: 4,
          unitName: 'Differential Equations',
          topics: [
            { day: 10, topicName: 'Ordinary Differential Equations' },
            { day: 11, topicName: 'Partial Differential Equations' },
            { day: 12, topicName: 'Laplace Transforms' }
          ]
        },
        {
          unitNumber: 5,
          unitName: 'Statistics',
          topics: [
            { day: 13, topicName: 'Descriptive Statistics' },
            { day: 14, topicName: 'Inferential Statistics' },
            { day: 15, topicName: 'Hypothesis Testing' }
          ]
        }
      ]
    },
    {
      learningPathId: '3',
      subjectName: 'Physics',
      learningPath: [
        {
          unitNumber: 1,
          unitName: 'Classical Mechanics',
          topics: [
            { day: 1, topicName: 'Newton’s Laws of Motion' },
            { day: 2, topicName: 'Work, Energy, and Power' },
            { day: 3, topicName: 'Rotational Motion' }
          ]
        },
        {
          unitNumber: 2,
          unitName: 'Thermodynamics',
          topics: [
            { day: 4, topicName: 'Laws of Thermodynamics' },
            { day: 5, topicName: 'Heat Engines' },
            { day: 6, topicName: 'Entropy' }
          ]
        },
        {
          unitNumber: 3,
          unitName: 'Electromagnetism',
          topics: [
            { day: 7, topicName: 'Electric Fields' },
            { day: 8, topicName: 'Magnetic Fields' },
            { day: 9, topicName: 'Electromagnetic Induction' }
          ]
        },
        {
          unitNumber: 4,
          unitName: 'Optics',
          topics: [
            { day: 10, topicName: 'Reflection and Refraction' },
            { day: 11, topicName: 'Interference' },
            { day: 12, topicName: 'Diffraction' }
          ]
        },
        {
          unitNumber: 5,
          unitName: 'Quantum Mechanics',
          topics: [
            { day: 13, topicName: 'Wave-Particle Duality' },
            { day: 14, topicName: 'Schrodinger Equation' },
            { day: 15, topicName: 'Quantum Entanglement' }
          ]
        }
      ]
    },
    {
      learningPathId: '4',
      subjectName: 'Chemistry',
      learningPath: [
        {
          unitNumber: 1,
          unitName: 'Atomic Structure',
          topics: [
            { day: 1, topicName: 'Bohr Model' },
            { day: 2, topicName: 'Quantum Numbers' },
            { day: 3, topicName: 'Electron Configuration' }
          ]
        },
        {
          unitNumber: 2,
          unitName: 'Chemical Bonding',
          topics: [
            { day: 4, topicName: 'Ionic Bonding' },
            { day: 5, topicName: 'Covalent Bonding' },
            { day: 6, topicName: 'Metallic Bonding' }
          ]
        },
        {
          unitNumber: 3,
          unitName: 'Thermochemistry',
          topics: [
            { day: 7, topicName: 'Enthalpy' },
            { day: 8, topicName: 'Entropy' },
            { day: 9, topicName: 'Gibbs Free Energy' }
          ]
        },
        {
          unitNumber: 4,
          unitName: 'Equilibrium',
          topics: [
            { day: 10, topicName: 'Le Chatelier’s Principle' },
            { day: 11, topicName: 'Acids and Bases' },
            { day: 12, topicName: 'Buffer Solutions' }
          ]
        },
        {
          unitNumber: 5,
          unitName: 'Organic Chemistry',
          topics: [
            { day: 13, topicName: 'Alkanes and Alkenes' },
            { day: 14, topicName: 'Alcohols and Ethers' },
            { day: 15, topicName: 'Carboxylic Acids' }
          ]
        }
      ]
    },
    {
      learningPathId: '5',
      subjectName: 'Biology',
      learningPath: [
        {
          unitNumber: 1,
          unitName: 'Cell Biology',
          topics: [
            { day: 1, topicName: 'Cell Structure' },
            { day: 2, topicName: 'Cell Membrane' },
            { day: 3, topicName: 'Cell Division' }
          ]
        },
        {
          unitNumber: 2,
          unitName: 'Genetics',
          topics: [
            { day: 4, topicName: 'Mendelian Genetics' },
            { day: 5, topicName: 'DNA Structure' },
            { day: 6, topicName: 'Gene Expression' }
          ]
        },
        {
          unitNumber: 3,
          unitName: 'Ecology',
          topics: [
            { day: 7, topicName: 'Ecosystems' },
            { day: 8, topicName: 'Food Chains' },
            { day: 9, topicName: 'Energy Flow' }
          ]
        },
        {
          unitNumber: 4,
          unitName: 'Evolution',
          topics: [
            { day: 10, topicName: 'Natural Selection' },
            { day: 11, topicName: 'Speciation' },
            { day: 12, topicName: 'Evolutionary Theories' }
          ]
        },
        {
          unitNumber: 5,
          unitName: 'Human Anatomy',
          topics: [
            { day: 13, topicName: 'Skeletal System' },
            { day: 14, topicName: 'Muscular System' },
            { day: 15, topicName: 'Circulatory System' }
          ]
        }
      ]
    }
]

export default sampleLearningPaths;
  