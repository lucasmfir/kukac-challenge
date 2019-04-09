import palindrome from "../palindrome";

test("[palindrome 1] /", async () => {
  const res = await palindrome(2, 3)
  expect(res).toMatchObject([2, 3]);
});

test("[palindrome 2] /", async () => {
  const res = await palindrome(1, 100)
  expect(res.length).toBeLessThanOrEqual(100-1+1);
});