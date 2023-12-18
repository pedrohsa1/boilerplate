import { render, screen } from '@testing-library/react'
import Main from '.'

//https://testing-library.com/docs/react-testing-library/cheatsheet/

describe('<Main />', () => {
  it('should render the heading', () => {
    //renderizar o componente
    const { container } = render(<Main />)

    //busca o elemento e verifica a existência
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    //Gerar snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
