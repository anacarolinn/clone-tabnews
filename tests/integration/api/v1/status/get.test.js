test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status"); // o await só é possível ser usado em uma função assíncrona, por isso na linha acima usamos o async
  expect(response.status).toBe(200);
});
