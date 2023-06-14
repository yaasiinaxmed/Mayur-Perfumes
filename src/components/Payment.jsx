import React, { useEffect, useState } from "react";
import useShop from "../ShopContext";
import axios from "axios";
import { toast } from "react-hot-toast";

const Payment = () => {
  const initialPayment = {
    evc: false,
    zaad: false,
    sahal: false,
  };

  const [paymentMethod, setPeymentMethod] = useState(initialPayment);
  const [updated, setUpdated] = useState(false);
  const [phone, setPhone] = useState("");
  const { total } = useShop();
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, [updated]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!phone) return toast.error("Phone Is empty")
    processPayment()
  };

  const processPayment = async () => {
    try {
        const body = {
            schemaVersion: "1.0",
            requestId: "10111331033",
            timestamp: 1590587436057686,
            channelName: "WEB",
            serviceName: "API_PURCHASE",
            serviceParams: {
              merchantUid: import.meta.env.VITE_MERCHANT_U_ID,
              apiUserId: import.meta.env.VITE_MERCHANT_API_USER_ID,
              apiKey: import.meta.env.VITE_MERCHANT_API_KEY,
              paymentMethod: "mwallet_account",
              payerInfo: {
                accountNo: phone,
              },
              transactionInfo: {
                referenceId: "12334",
                invoiceId: "7896504",
                amount: total,
                currency: "USD",
                description: "React Shopping Cart",
              },
            },
          };

        setLoading(true);
        const {data} = await axios.post("https://api.waafipay.net/asm", body)
        setLoading(false)

        const info = data.responseMsg.split("ERRCODE");

        // console.log(info)

        if(info.length == 1) {
          setUpdated(!updated);
          toast.success("Succesfully ordered");
        }else {
          if(data.responseMsg.split("ERRCODE")[2].includes(4004)) {
            toast.error("User rejected")
            setUpdated(!updated);
          }

          if(data.responseMsg.split("ERRCODE")[2].includes(6002)) {
            toast.error("Numberka Sirta ah waa Khalad")
            setUpdated(!updated);
          }

          if(data.responseMsg.split("ERRCODE")[2].includes(8001)) {
            toast.error("Haraaga xisaabtaadu kuguma filna")
            setUpdated(!updated)
          }
        }

        // console.log(data);

    } catch (error) {
        console.log(error)
    }
  };

  return (
    <div>
      <h2>Pay With</h2>
      <div className="payment-cards">
        <div
          className={`payment-card ${paymentMethod.zaad && "selected"} `}
          onClick={() => setPeymentMethod({ ...initialPayment, zaad: true })}>
          <h3>Zaad Services</h3>
        </div>
        <div
          className={`payment-card ${paymentMethod.evc && "selected"}`}
          onClick={() => setPeymentMethod({ ...initialPayment, evc: true })}
        >
          <h3>Evc plus</h3>
        </div>
        <div
          className={`payment-card ${paymentMethod.sahal && "selected"}`}
          onClick={() => setPeymentMethod({ ...initialPayment, sahal: true })}
        >
          <h3>Sahal</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="2526...."
            onChange={(e) => setPhone(e.target.value)}
          />
          <button className="pay-btn">{loading ? "Loading..." : "Pay Now " }</button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
