"use client"
import  { useState, useEffect } from 'react';
import {subjectsData , branches , semesters} from '@/Data' ; 
import { MainButton } from './Commons';



const NotesFetcher = () => {
  const [branch, setBranch] = useState('');
  const [semester, setSemester] = useState('');
  const [subject, setSubject] = useState('');
  const [subjects, setSubjects] = useState([]);
  const [noteUrl, setNoteUrl] = useState('');

  
  
// when branch and semester both changes this hook will invoke then it just 
// check if condition true then using setSubjects it will show subjects according to the 
// branch and semester 

  useEffect(() => {
    if (branch && semester) {
      setSubjects(subjectsData[branch][semester] || []);
      setSubject(''); 
    } else {
      setSubjects([]);
    }
  }, [branch, semester]);

 
  const handleFetchNotes = () => {
    if (branch && semester && subject) {

      const pdfName = `${subject}.pdf`;
      const pdfUrl = `/${pdfName}`;
  
      setNoteUrl(pdfUrl);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-3 p-3 ">

        <div className="w-full md:w-1/4 p-4 bg-[#A1AEC7] rounded-md">
          {/* Select Branch */}
          <div className="mb-4">
            <label className="subHeading">Branch</label>
            <select
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">Select Branch</option>
              {branches.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Select Semester */}
          <div className="mb-4">
            <label className="subHeading">Semester</label>
            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">Select Semester</option>
              {semesters.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Select Subject */}
        {branch && semester && (
        <div className="w-full md:w-1/4 p-4 bg-[#A1AEC7] rounded-md">
         
            <div className="mb-4">
              <label className="subHeading">Subject</label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Subject</option>
                {subjects.map((sub) => (
                  <option key={sub} value={sub}>
                    {sub}
                  </option>
                ))}
              </select>
            </div>
          
         <MainButton
           buttonName = {"Search Notes"}
           handleClick={handleFetchNotes}
         />
        </div>
        )}
      </div>

      {/* Show Notes */}
      <div className="p-4">
        {noteUrl && (
          <iframe
            src={noteUrl}
            className="w-full h-screen"
             title="Notes Viewer"
            
          ></iframe>
        ) }
      </div>
    </>
  );
};

export default NotesFetcher;
