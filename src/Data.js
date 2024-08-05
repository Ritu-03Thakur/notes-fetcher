const branches = ['CSE', 'ECE', 'CIVIL']; 
  const semesters = ['1', '2', '3', '4', '5', '6', '7', '8']; 


const subjectsData = {
    
        CSE: {
          1: [
            "Mathematics I",
            "Physics I",
            "Chemistry",
            "Basic Electrical Engineering",
            "Engineering Mechanics",
            "Engineering Graphics",
            "English Communication Skills",
            "Introduction to Computer Programming"
          ],
          2: [
            "Mathematics II",
            "Physics II",
            "Environmental Studies",
            "Basic Electronics Engineering",
            "Data Structures and Algorithms",
            "Engineering Drawing",
            "Workshop Practice"
          ],
          3: [
            "Mathematics III",
            "Discrete Mathematics",
            "Digital Logic Design",
            "Computer Organization and Architecture",
            "Object-Oriented Programming (OOP)",
            "Database Management Systems (DBMS)",
            "Operating Systems"
          ],
          4: [
            "Mathematics IV / Probability and Statistics",
            "Microprocessors and Interfacing",
            "Design and Analysis of Algorithms",
            "Software Engineering",
            "Computer Networks",
            "Theory of Computation",
            "Professional Ethics"
          ],
          5: [
            "Compiler Design",
            "Artificial Intelligence",
            "Web Technologies",
            "Information Security",
            "Elective I",
            "Open Elective I"
          ],
          6: [
            "Computer Graphics",
            "Distributed Systems",
            "Machine Learning",
            "Internet of Things (IoT)",
            "Elective II",
            "Open Elective II"
          ],
          7: [
            "Big Data Analytics",
            "Cyber Security",
            "Elective III",
            "Project Phase I",
            "Industrial Training / Internship"
          ],
          8 : [
            "Human-Computer Interaction",
            "Elective IV",
            "Project Phase II",
            "Comprehensive Viva-Voce",
            "Seminar"
          ]
        } , 
      
      
    ECE: {
       
              1: [
                "Mathematics I",
                "Physics I",
                "Chemistry",
                "Basic Electrical Engineering",
                "Engineering Mechanics",
                "Engineering Graphics",
                "English Communication Skills",
                "Introduction to Electronics"
              ],
              2: [
                "Mathematics II",
                "Physics II",
                "Environmental Studies",
                "Basic Electronics Engineering",
                "Digital Logic Design",
                "Electrical Circuit Analysis",
                "Communication Skills"
              ],
              3: [
                "Mathematics III",
                "Electromagnetic Fields",
                "Electronic Devices and Circuits",
                "Signals and Systems",
                "Analog Circuits",
                "Digital Circuits",
                "Microprocessors"
              ],
              4: [
                "Mathematics IV / Probability and Statistics",
                "Control Systems",
                "Digital Signal Processing",
                "Communication Systems",
                "VLSI Design",
                "Power Electronics",
                "Professional Ethics"
              ],
              5: [
                "Microwave Engineering",
                "Embedded Systems",
                "Optical Communication",
                "Antennas and Wave Propagation",
                "Elective I",
                "Open Elective I"
              ],
              6: [
                "Wireless Communication",
                "Data Communication",
                "Electronic Measurements and Instrumentation",
                "Advanced Digital Systems",
                "Elective II",
                "Open Elective II"
              ],
              7: [
                "Radar Systems",
                "Satellite Communication",
                "Elective III",
                "Project Phase I",
                "Industrial Training / Internship"
              ],
              8: [
                "Advanced Communication Systems",
                "Elective IV",
                "Project Phase II",
                "Comprehensive Viva-Voce",
                "Seminar"
              ]
               
     
    },
    

        CIVIL: {
          1: [
            "Mathematics I",
            "Physics I",
            "Chemistry",
            "Basic Mechanical Engineering",
            "Engineering Mechanics",
            "Engineering Graphics",
            "English Communication Skills",
            "Introduction to Civil Engineering"
          ],
          2: [
            "Mathematics II",
            "Physics II",
            "Environmental Studies",
            "Building Materials and Construction",
            "Fluid Mechanics",
            "Surveying",
            "Strength of Materials"
          ],
          3: [
            "Mathematics III",
            "Structural Analysis",
            "Reinforced Concrete Structures",
            "Geotechnical Engineering",
            "Hydraulics and Irrigation",
            "Transportation Engineering",
            "Environmental Engineering"
          ],
          4: [
            "Mathematics IV / Probability and Statistics",
            "Steel Structures",
            "Design of Reinforced Concrete Structures",
            "Construction Planning and Management",
            "Foundation Engineering",
            "Water Resources Engineering",
            "Professional Ethics"
          ],
          5: [
            "Design of Structures",
            "Construction Technology",
            "Advanced Soil Mechanics",
            "Bridge Engineering",
            "Elective I",
            "Open Elective I"
          ],
          6: [
            "Urban Planning and Design",
            "Railway Engineering",
            "Tunneling and Underground Construction",
            "Seismic Design of Structures",
            "Elective II",
            "Open Elective II"
          ],
          7: [
            "Project Management",
            "Advanced Construction Techniques",
            "Elective III",
            "Project Phase I",
            "Industrial Training / Internship"
          ],
          8: [
            "Disaster Management",
            "Elective IV",
            "Project Phase II",
            "Comprehensive Viva-Voce",
            "Seminar"
          ]
        }
      
      
   
  };

  export {subjectsData , branches , semesters} ; 