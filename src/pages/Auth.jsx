import AuthContainer from "../features/Authentication/AuthContainer";

function Auth() {
  return (
    <div className="h-screen bg-secondary-0">
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-center pt-10">
          <AuthContainer />
        </div>
      </div>
    </div>
  );
}

export default Auth;

// step=> 1 2
// send otp
// check otp
