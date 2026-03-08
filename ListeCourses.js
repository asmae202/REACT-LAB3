function ListeCourses({ courses }) {
  return (
    <ul>
      {courses.map((course, index) => (
        <li key={index}>{course}</li>
      ))}
    </ul>
  );
}

export default ListeCourses;