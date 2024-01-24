
// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { BrowserRouter as Router } from 'react-router-dom';

// import Login from "./index"


// describe('Login', () => {
//   it('navigates to target page when the button is clicked', () => {
//     const navigateMock = jest.fn();
//     const { getByText } = render(
//       <Router>
//         <Login />
//       </Router>
//     );

//     //  with the text content of your button
//     const button = getByText('Sign In');
    
//     // Mock the useNavigate hook to check if it's called with the correct argument
//     jest.mock('react-router-dom', () => ({
//       ...jest.requireActual('react-router-dom'),
//       useNavigate: () => navigateMock,
//     }));

//     fireEvent.click(button);

//     // Check if the useNavigate function is called with the correct argument
//     expect(navigateMock).toHaveBeenCalledWith('/RegistredUderListing');
//   });
// });
