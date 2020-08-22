import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Layout from "../layout";

test("Check if layout display title according to prop", async () => {
  const { getByText } = render(<Layout title={"Abc"} />);
  expect(getByText("Abc")).toBeInTheDocument();
});


test('Check if right props display a button', async () => {
  render(<Layout title={'Abc'} right={<button>add</button>}/>);
  expect(screen.getByText('add')).toBeInTheDocument();
})