import BrandText from "@/components/auth/BrandText";
import SignInBg from "@/components/auth/SignInBg";
import SignInButton from "@/components/auth/SignInButton";

const SignIn = () => {
  return (
    <main>
      <SignInBg />
      <div className="absolute top-0 right-0 bottom-0 left-0">
        <div className="flex flex-col items-center pt-[20vh] h-full">
          <BrandText />
          <SignInButton />
        </div>
      </div>
    </main>
  );
};

export default SignIn;
