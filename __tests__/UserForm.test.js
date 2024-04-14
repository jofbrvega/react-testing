import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import UserForm from "../src/components/UserForm";

test('it renders 2 inputfields on the screen', () => {
  render(<UserForm />)
  const inputFields = screen.getAllByRole('textbox')
  expect(inputFields).toHaveLength(2);
})

test('it calls the onUserAdd function with proper arguments when submitted', async () => {
  const mockSubmitter = jest.fn();
  render (<UserForm onUserAdd={mockSubmitter} />)
  const inputFields = screen.getAllByRole('textbox');
  const nameField = screen.getByRole('textbox', {
    name: /name/i,
  });
  await user.click(nameField);
  await user.keyboard('jane')

  const emailField = screen.getByRole("textbox", {
    name: /email/i,
  });
  await user.click(emailField);
  await user.keyboard("jane@test.com");

  const button = screen.getByRole('button')
  await user.click(button);

  expect(mockSubmitter).toHaveBeenCalled();
  expect(mockSubmitter).toHaveBeenCalledWith({ name: 'jane', email: 'jane@test.com' });
})