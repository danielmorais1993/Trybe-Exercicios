import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
afterEach(()=>jest.clearAllMocks());

test('Renderization of a random joke', async () => {
  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue({
      id: '7h3oGtrOfxc',
        joke: 'Whiteboards ... are remarkable.',
        status:200,

    })
  })
  

  render(<App />);
  const renderedJoke = await screen.findByText(/Whiteboards ... are remarkable./i);
  expect(renderedJoke).toBeInTheDocument();
})
test('testing if renders a joke', async () => {
  jest.spyOn(global,'fetch');
  global.fetch.mockResolvedValue({
    json:jest.fn().mockResolvedValue({
      id: '0189hNRf2g',
    joke: "I'm tired of following my dreams. I'm just going to ask them where they are going and meet up with them later.",
    status:200,
})
})

  render(<App />);
  const renderedJoke = await screen.findByText("I'm tired of following my dreams. I'm just going to ask them where they are going and meet up with them later.");
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/',{ headers: { Accept: 'application/json' } })
  

    jest.spyOn(global,'fetch');
    global.fetch.mockResolvedValueOnce({
      json:jest.fn().mockResolvedValue({
        id: '08EQZ8EQukb',
      joke: "Did you hear about the guy whose whole left side was cut off? He's all right now.",
      status:200,
  })
})
const button = await screen.findByText(/New Joke/i);
userEvent.click(button);

  const renderedSecondJoke = await screen.findByText("Did you hear about the guy whose whole left side was cut off? He's all right now.");
  expect(screen.queryByText(/I'm tired of following my dreams. I'm just going to ask /i)).not.toBeInTheDocument();
  expect(renderedSecondJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(2);
  expect(global.fetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/',{ headers: { Accept: 'application/json' } })


  
  })
