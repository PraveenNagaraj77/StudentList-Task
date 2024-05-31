import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import SelectSchool from "./SelectSchool";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import Icons from "./Icons";

const ListofStudents = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 9;
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/students")
      .then((response) => {
        const studentData = response.data.data; // Extract the array of student objects
        setStudents(studentData); // Set the students state
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Pagination logic
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = students.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  // Calculate the total number of pages
  const totalPages = Math.ceil(students.length / studentsPerPage);

  const totalStudents = students.length;

  // Page Count
  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
    if (count === 0) {
      setCount(0);
    }
  };

  const handleNextPage = () => {
    if (currentPage * studentsPerPage < students.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPageAndIncreaseCount = () => {
    handleNextPage(); // Call the first function
    increaseCount(); // Call the second function
  };
  const handlePreviousPageAndIncreaseCount = () => {
    handlePreviousPage(); // Call the first function
    decreaseCount(); // Call the second function
  };

  return (
    <div className="flex justify-center items-center w-full bg-gray-200 h-auto">
      <div className="bg-purple-700 p-10 border rounded-2xl max-w-full border-black w-[80%]  h-full  mx-10 my-10">
        <div className="flex justify-between">
          <div className="left-div w-1/7">
            <Icons/>
          </div>
          <div className="mr-10 right-div w-full">
          <div className="w-full h-full bg-gray-100 p-5 border rounded-2xl pl-10 overflow-hidden">
          <Navbar totalStudents={totalStudents} />
          <hr />
          <SelectSchool />
          <div className="mt-3">
            <table className="w-full border rounded border-gray-300">
              <thead className="border-b border-gray-300">
                <tr className="text-gray-400">
                  <th className="p-2 text-left align-top">
                    <MdOutlineCheckBoxOutlineBlank className="text-gray-400 cursor-pointer font-medium" />
                  </th>
                  <th className="p-2 text-left font-medium">ID</th>
                  <th className="p-2 text-left font-medium">First name</th>
                  <th className="p-2 text-left font-medium">Last name</th>
                  <th className="p-2 text-left font-medium">Email</th>
                  <th className="p-2 text-left font-medium">Mobile</th>
                  <th className="p-2 text-left font-medium">Year Group</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(currentStudents) &&
                  currentStudents.map((student, index) => (
                    <tr key={index} className="p-2 border-b border-opacity-80">
                      <td className="p-2 text-left align-top">
                        <MdOutlineCheckBoxOutlineBlank className="text-gray-400 cursor-pointer" />
                      </td>
                      <td className="p-2">{student.id}</td>
                      <td className="p-2">{student.attributes.firstName}</td>
                      <td className="p-2">{student.attributes.lastName}</td>
                      <td className="p-2">
                        {student.attributes.parentEmailId}
                      </td>
                      <td className="p-2">
                        {student.attributes.parentContactNo}
                      </td>
                      <td className="p-2">{student.attributes.dob}</td>
                    </tr>
                  ))}
              </tbody>
            </table>

            <div className="flex flex-row justify-end ">
              <div className="flex justify-evenly items-center mt-4 ">
                <MdOutlineNavigateBefore
                  className=" bg-gray-100 w-24 size-10 text-gray-500 border border-opacity-100 px-4 py-1   rounded-2xl cursor-pointer mr-4 "
                  onClick={handlePreviousPageAndIncreaseCount}
                  disabled={currentPage === 1}
                />
                <MdOutlineNavigateNext
                  size={30}
                  className=" bg-purple-700 w-24 size-10 text-white px-4 py-1  rounded-2xl cursor-pointer"
                  onClick={handleNextPageAndIncreaseCount}
                  disabled={currentPage * studentsPerPage >= students.length}
                />
              </div>
              <div className="flex flex-row mt-5 ml-56 justify-evenly items-center">
                <button className="px-7 border border-purple-700 text-purple-700 rounded-2xl">
                  {count}
                </button>
                <p className="text-purple-700 p-2 ml-2">of {totalPages} </p>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ListofStudents;
