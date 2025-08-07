import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/componets/GifGrid";
import { useFetchGifs } from "../../src/Hooks/useFetchGifs";

jest.mock("../../src/Hooks/useFetchGifs");

describe("Pruebas en gifgrid", () => {
  const category = "One punch";

  test("debe de mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });
  test("debe de mostrar items cuando se cargan las imagenes useFechGifs", () => {
    const gifs = [
      {
        id: "ABC",
        title: "saitama",
        url: "https://localhost/sam.jpg",
      },
      {
        id: "123",
        title: "goku",
        url: "https://localhost/goku.jpg",
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
