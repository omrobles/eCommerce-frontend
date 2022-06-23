import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";
import Swal from "sweetalert2";
import axios from "axios";

export default class PaypalButton extends React.Component {
  render() {
    const onSuccess = (payment) => {
      const token = localStorage.getItem("token");
      if (token) {
        axios.defaults.headers.common["x-auth-token"] = token;
      } else {
        delete axios.Client.defaults.headers.common["x-auth-token"];
      }
      axios
        .put(`${process.env.REACT_APP_BACKEND_URL}/users/clear-cart`, {
          orders: payment,
        })
        .then((response) => {
          console.log(response);
        });
      Swal.fire({
        icon: "success",
        text: "Tu compra se ha completado.",
      });
    };

    const onCancel = (data) => {
      Swal.fire({
        icon: "error",
        text: "Tu compra no se ha completado.",
      });
      console.log("The payment was cancelled!", data);
    };

    const onError = (err) => {
      Swal.fire({
        icon: "error",
        text: "Lo sentimos, hubo un error al realizar tu pago. Intentalo mas tarde.",
      });
      console.log("Error!", err);
    };

    let env = "sandbox";
    let currency = "MXN";
    let total = this.props.total;

    const client = {
      sandbox: "Aa2hfyiXwtNs9bRlRU5u79Acwl_D_J0rUSUTYjTTpHIn5pT19wpWubuAdukZxZmlu3FxDP8AYsVO7uo7",
      production: "YOUR-PRODUCTION-APP-ID",
    };

    return (
      <PaypalExpressBtn
        env={env}
        client={client}
        currency={currency}
        total={total}
        onError={onError}
        onSuccess={onSuccess}
        onCancel={onCancel}
      />
    );
  }
}
