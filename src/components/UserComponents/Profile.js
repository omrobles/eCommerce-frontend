import React, { useContext, useEffect } from "react";
import UserContext from "../../context/users/UserContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Profile = () => {
  const userCtx = useContext(UserContext);

  const { userData, user, verifyingToken, handleChange, updateUser, setUserData } = userCtx;

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/", { replace: true });
  };

  const updateData = (data) => {
    updateUser(data);
    navigateHome();
  };

  useEffect(() => {
    verifyingToken();
  }, []);

  return (
    <div className="FormContainer">
      <h1>Perfil de usuario</h1>
      <div className="FormFields">
        <p>**Esta página es con fines académicos. Solo usar valores falsos.**</p>
        <label htmlFor="name">Nombre</label>
        <input
          id="name"
          name="name"
          type="text"
          defaultValue={user.name}
          required
          onChange={handleChange}
        />
        <label htmlFor="address">Dirección</label>
        <input
          id="address"
          name="address"
          type="text"
          defaultValue={user.address}
          required
          onChange={handleChange}
        />
        <div className="Buttons">
          <button
            onClick={() => {
              navigate("/", { replace: true });
            }}
          >
            Cancelar
          </button>
          <button
            onClick={() => {
              updateUser(userData);
            }}
          >
            Actualizar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
