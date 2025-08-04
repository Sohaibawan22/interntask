// --- RAW MOCK DATA ---
const rawData = {
  teacher: {
    name: "Muhammad Sohaib",
    school: "Public School",
    grade: "Grade 5"
  },
  classes: {
    room201: {
      id: 'room201',
      name: 'Grade 5 - Room 201',
      students: [
        { id: 's1', name: 'ali', scores: { math: 92, ela: 88, science: 95 } },
        { id: 's2', name: 'umer', scores: { math: 85, ela: 91, science: 87 } },
        { id: 's3', name: 'Noor', scores: { math: 78, ela: 75, science: 80 } },
        { id: 's4', name: 'Emman', scores: { math: 90, ela: 94, science: 68 } },
        { id: 's5', name: 'Sohaib', scores: { math: 98, ela: 98, science: 95 } },
        { id: 's6', name: 'Minahil', scores: { math: 89, ela: 92, science: 88 } },
        { id: 's7', name: 'akash', scores: { math: 72, ela: 70, science: 75 } },
        { id: 's8', name: 'yavish', scores: { math: 90, ela: 93, science: 91 } },
        { id: 's9', name: 'Zohan', scores: { math: 77, ela: 80, science: 79 } },
        { id: 's10', name: 'khan', scores: { math: 94, ela: 90, science: 96 } },
      ],
    },
    room202: {
      id: 'room202',
      name: 'Grade 5 - Room 202',
      students: [
        { id: 's11', name: 'Awan', scores: { math: 88, ela: 90, science: 85 } },
        { id: 's12', name: 'Junaid', scores: { math: 75, ela: 78, science: 82 } },
        { id: 's13', name: 'Sophia', scores: { math: 91, ela: 89, science: 94 } },
        { id: 's14', name: 'Masoom', scores: { math: 82, ela: 85, science: 81 } },
        { id: 's15', name: 'Isabella', scores: { math: 70, ela: 73, science: 76 } },
        { id: 's16', name: 'Kaleem', scores: { math: 80, ela: 79, science: 83 } },
        { id: 's17', name: 'arshad', scores: { math: 93, ela: 95, science: 90 } },
        { id: 's18', name: 'aleena', scores: { math: 68, ela: 72, science: 65 } },
        { id: 's19', name: 'Aiman', scores: { math: 87, ela: 86, science: 89 } },
        { id: 's20', name: 'wasif', scores: { math: 76, ela: 74, science: 78 } },
      ],
    },
  },
};

// --- PERFORMANCE CALCULATION FUNCTIONS ---
const calculateClassAverage = (students, subject) => {
  if (!students || students.length === 0) return 0;
  const total = students.reduce((sum, student) => sum + student.scores[subject], 0);
  return Math.round(total / students.length);
};

const getClassOverallAverage = (students) => {
  if (!students || students.length === 0) return 0;
  const total = students.reduce((sum, student) => {
    return sum + (student.scores.math + student.scores.ela + student.scores.science) / 3;
  }, 0);
  return Math.round(total / students.length);
};

const getGlobalAverages = (classesObject) => {
  const allStudents = Object.values(classesObject).flatMap(cls => cls.students);
  const mathAvg = calculateClassAverage(allStudents, 'math');
  const elaAvg = calculateClassAverage(allStudents, 'ela');
  const scienceAvg = calculateClassAverage(allStudents, 'science');
  const overallAvg = getClassOverallAverage(allStudents);
  return { math: mathAvg, english: elaAvg, science: scienceAvg, overall: overallAvg };
};

// --- GENERATE FINAL MOCK DATA WITH AVERAGES ---
const generateFullMockData = (data) => {
  const classesWithAverages = {};
  Object.keys(data.classes).forEach(classKey => {
    const students = data.classes[classKey].students;
    classesWithAverages[classKey] = {
      ...data.classes[classKey],
      averages: {
        math: calculateClassAverage(students, 'math'),
        english: calculateClassAverage(students, 'ela'),
        science: calculateClassAverage(students, 'science'),
        overall: getClassOverallAverage(students),
      }
    };
  });

  return {
    ...data,
    classes: classesWithAverages,
    globalAverages: getGlobalAverages(classesWithAverages),
    subjects: ['Math', 'English', 'Science'],
  };
};

export const mockData = generateFullMockData(rawData);
