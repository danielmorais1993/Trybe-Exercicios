import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './components/validEmail';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente caso o email seja inválido',()=>{
  const EMAIL_USER = 'emailemailom';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
})
test("Se ao iniciar a pagina renderiza algum elemento", ()=>{
  const userEmail = screen.queryByText('Email Inválido')
  expect(userEmail).not.toBeInTheDocument();
})
test('Testando um componente, caso o email seja válido renderizar o componente com cor azul.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const validElement = screen.getByText('Email Válido');
  const style = window.getComputedStyle(validElement);
  expect(style.color).toBe('blue')
});
test('Testando um componente, caso o email seja inválido renderizar o componente com cor vermelho.', () => {
  const EMAIL_USER = 'emailailom';
  render(<ValidEmail email={ EMAIL_USER } />);
  const invalidElement = screen.getByText('Email Inválido');
  const style = window.getComputedStyle(invalidElement);
  expect(style.color).toBe('red')
});
