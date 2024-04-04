import React, { useEffect, useState } from "react";
import styles from "./RegisterPage.module.css";
import Input from "../../../shared/input/Input";
import Button from "../../../shared/buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUsers, registerUser } from "../../../store/users/users.actions";

const RegisterPage = () => {
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
    email: "",
    profileImage: "",
  });

  function handleChange(e) {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
    for (let key in user) {
      if (!user[key]) {
        alert("Some inputs are empty!");
        return;
      }
    }
    if (user.password !== user.passwordConfirm) {
      alert("Passwords do not match");
      return;
    }

    if (user.password.length < 6) {
      alert("Password must be more than 6 symbols");
      return;
    }

    const userObj = await users.find(
      (item) =>
        item.username.toLocaleLowerCase() === user.username.toLocaleLowerCase()
    );

    if (userObj) {
      alert("You have already registered");
      return;
    }

    dispatch(registerUser(user));
    setUser({
      username: "",
      password: "",
      passwordConfirm: "",
      email: "",
      profileImage: "",
    });
    navigate("/home");
  }

  return (
    <div className={styles.body}>
      <div className={styles.card}>
        <form onSubmit={handleSubmit}>
          <h2>Регистрация</h2>
          <Input
            onChange={handleChange}
            name="username"
            value={user.username}
            type="text"
          />
          <Input
            onChange={handleChange}
            name="password"
            value={user.password}
            type="password"
          />
          <Input
            onChange={handleChange}
            name="passwordConfirm"
            value={user.passwordConfirm}
            type="password"
          />
          <Input
            onChange={handleChange}
            name="email"
            value={user.email}
            type="email"
          />
          <Input
            onChange={handleChange}
            name="profileImage"
            value={user.profileImage}
            type="url"
          />
          <Button>Регистрация</Button>

          {/* <Button>Войти</Button> */}
          <Link to="/home">
            <Button>Войти как гость</Button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
