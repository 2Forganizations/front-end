import { render, screen } from "@testing-library/react";
import HomePresenter from "../HomePresenter";
// 테스트 예시
describe("Home", () => {
  it("render", () => {
    render(<HomePresenter />);
    const heading = screen.getByText("홈프레젠터");
    expect(heading).toBeInTheDocument();
  });
});
