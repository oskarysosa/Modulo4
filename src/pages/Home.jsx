import Login from "../components/Login";

export const LoginPage = ({ changeAuth }) => {
  return (
    <div className="App">
      <Login changeAuth={changeAuth} />
    </div>
  );
};
