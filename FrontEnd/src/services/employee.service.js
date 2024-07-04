let employees = []; 

//placeholdre function
 const createEmployee = (formData) => {
  
  const newEmployee = {
    id: employees.length + 1, 
    ...formData,
  };
  employees.push(newEmployee);
  return Promise.resolve(newEmployee); 
};

export default createEmployee;