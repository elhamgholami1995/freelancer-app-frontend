import TextField from "../../ui/TextField";

import Loading from "../../ui/Loading";

function SendOTPForm({ onSubmit, isSendingOtp, phoneNumber, onChange }) {
  // usequerry= get
  // usemutaation = post,put,delete

  return (
    <div>
      <form className="space-y-8" onSubmit={onSubmit}>
        <TextField
          name="phoneNumber"
          label="شماره تماس"
          value={phoneNumber}
          onChange={onChange}
        />
        <div>
          {isSendingOtp ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendOTPForm;
