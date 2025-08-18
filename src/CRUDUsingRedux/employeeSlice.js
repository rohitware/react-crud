import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  employees: [],
}

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      console.log("action", action);
      state.employees.push(action.payload);
    },

    updateEmployee: (state, action) => {
      console.log('inside update redux', action.payload)
      const { id, empl } = action.payload
      console.log('empl in updateEmployee', empl)
      // Find the index of the employee with the given id
      const index = state.employees.findIndex(emp => emp.id === id)
      if (index !== -1) {
        console.log('Inside if check' + empl)
        state.employees[index] = { ...state.employees[index], ...empl }
      }
    },

    deleteEmployee: (state, action) => {
      state.employees = state.employees.filter(emp => emp.id !== action.payload)
    }
  }

});

export const { addEmployee, deleteEmployee, updateEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;

// This is the slice for employee management using Redux Toolkit
// It includes actions to add, delete, and update employees in the state
// The initial state contains an empty array for employees
// The slice is exported for use in the Redux store and components
// The selectEmployees function is used to access the employees from the state
// The actions can be dispatched to modify the employee state in the Redux store