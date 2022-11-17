import { getByTestId, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
const inputName = screen.getByLabelText("Email:");
expect(inputName).toBeInTheDocument();
expect(inputName.type).toBe("email")


});
test("Verifica se existe botão", ()=>{
  render(<App />)
  const button = screen.getAllByRole("button");
  expect(button).toHaveLength(1)

})
test ("Verfica se o botão existente possui o texto especificado", ()=>{
  render(<App/>)
  const button = screen.getByTestId("sub-btn");
  expect(button).toBeInTheDocument();
  expect(button).toHaveValue('Submit');
  expect(button).toHaveProperty('type','submit');

})
test("Verifica se o texto renderiza corretamente", ()=>{
  render(<App />)
  const email = screen.getByLabelText('Email:')
  const button = screen.getByTestId("sub-btn");

  const userEmail = screen.getByTestId("id-email-user");

  userEvent.type(email,"teste@teste.com");
  userEvent.click(button);
  expect(email).toHaveValue('');
  expect(userEmail).toHaveTextContent('Valor: teste@teste.com');
});
