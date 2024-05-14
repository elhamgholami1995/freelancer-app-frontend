import { useState } from "react";
import TextField from "../../ui/TextField";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";

function SendOTPForm({ setStep }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      setStep(2);
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  // usequerry= get
  // usemutaation = post,put,delete

  return (
    <div>
      <form className="space-y-8" onSubmit={sendOtpHandler}>
        <TextField
          name="phoneNumber"
          label="شماره تماس"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button type="submit" className="btn btn--primary w-full">
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
}

export default SendOTPForm;