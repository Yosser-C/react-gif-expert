import { render, screen } from "@testing-library/react";
import { Gifitem } from "../../src/componets/Gifitem";

describe("pruebas en Gifitem", () => {
  const title = "saitama";
  const url = "https://one puch.com/onetock.jpg";
  test("debe de ahcer match con el snapshot", () => {
    const { container } = render(<Gifitem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
  test("debe mostrar la imagen con el url y el alt indicado ", () => {
    render(<Gifitem title={title} url={url} />);
    //screen.debug();
    //expect(screen.getByRole("img").src).toBe(url);
    //expect(screen.getByRole("img").alt).toBe(title );
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });
  test("debe de mostrar el titulo en el componente", () => {
    render(<Gifitem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy(); //que exista el titulo
  });
});
