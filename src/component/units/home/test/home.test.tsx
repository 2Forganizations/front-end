import HomePage from "@/pages/home";
import { render, screen } from "@testing-library/react";

// 테스트 예시
describe("Home", () => {
  it("render", () => {
    render(<HomePage />);
    const heading = screen.getByText("홈프레젠터");
    expect(heading).toBeInTheDocument();
  });
});
