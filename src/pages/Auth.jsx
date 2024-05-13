import CheckOTPForm from "../features/Authentication/CheckOTPForm";
import SendOTPForm from "../features/Authentication/SendOTPForm/";

function Auth() {
  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <SendOTPForm />
        {/* <CheckOTPForm /> */}
      </div>
    </div>
  );
}

export default Auth;

// step=> 1 2
// send otp
// check otp
