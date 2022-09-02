// Write your solution in this file!
let employee = {
  name:'Sam',
  streetAddress: '11 Broadway'
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
  let newEmployee = { ...employee };
  newEmployee = [key] = value;
  return newEmployee;
}
function destructivelyUpdateWithKeyAndValue(employee, key, value)
{
  let updateEmployee = employee;
employee[key] = value;
return updateEmployee
}
function deleteFromEmployeeByKey(employee, key)
{
    let deleteEmployee = {...employee};
    delete deleteEmployee[key];
    return deleteEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key)
{
    let destroyEmployeeDelete = employee;
    delete destroyEmployeeDelete[key];
  return destroyEmployeeDelete;
}
