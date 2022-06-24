import { filterQuestionsById } from "./Survey";

test("that question is returned", () => {
  expect(filterQuestionsById(1)).toBeTruthy();
});

test("that question is not returned", () => {
  expect(filterQuestionsById(10)).toMatchObject({});
});
