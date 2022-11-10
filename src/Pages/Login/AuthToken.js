export const AuthToken = (user) => {
  const userEmail = {
    email: user.email,
  };
  fetch(`http://localhost:5000/jwt`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(userEmail),
  })
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem("Beauty-base", data.token);
    });
};
