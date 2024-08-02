import React, { useState } from 'react';

const jobsData = [
  { id: 1, title: 'Frontend Developer', company: 'TechCorp' },
  { id: 2, title: 'Backend Engineer', company: 'DataLabs' },
  // ... more jobs
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        <h1 className="text-4xl font-bold">Job Board</h1>
        <button onClick={toggleNavbar} className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div className={`bg-gray-800 text-white absolute top-0 left-0 w-full h-screen overflow-y-auto transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className="mt-16">
          {jobsData.map(job => (
            <li key={job.id} className="py-4 px-8 border-b border-gray-700">
              <h3 className="text-lg font-medium">{job.title}</h3>
              <p className="text-gray-400">{job.company}</p>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
