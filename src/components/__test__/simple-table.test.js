import React from "react";
import { render, screen } from "@testing-library/react";
import SimpleTable from "../simple-table";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect" // Add custom matcher

describe("Checking with column header", () => {
  const columns = ["A", "B"];
  const { getAllByRole } = render(<SimpleTable columns={columns} />);
  const columnheaders = getAllByRole("columnheader");

  test("Expect thead is exist", () => {
    // First column should be A
    expect(columnheaders[0]).toHaveTextContent("A");
    expect(columnheaders[1]).toHaveTextContent("B");
  });

  test("The number of thead should be same as the length of column", () => {
    expect(columnheaders.length).toEqual(2);
  });

  test("Expect starting from 2nd column has right align styling", () => {
    const [firstColumn, ...otherColumns] = columnheaders;
    expect(firstColumn).not.toHaveClass("MuiTableCell-alignRight");
    otherColumns.forEach((column) => {
      expect(column).toHaveClass("MuiTableCell-alignRight");
    });
  });
});

describe("Pass a data", () => {
  const columns = ["name", "description"];
  const data = [
    {
      name: "Blog List",
      description: "Show list of blog",
      fields: 6,
      updatedAt: new Date(),
      status: "active",
    },
  ];

  test("Expect the table list out all of the fields based on column name", () => {
    const { getAllByRole } = render(
      <SimpleTable columns={columns} data={data} />
    );
    const other = getAllByRole('cell')
    expect(other[0]).toHaveTextContent('Blog List')
    expect(other[1]).toHaveTextContent('Show list of blog')
  });
});
