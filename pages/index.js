import SignInPage from "./Signin";

export default function Home() {
  return (
     <div>
       <header className="w-full p-6 bg-blue-500 text-white text-left text-3xl font-bold">
        Zing Rooms
      </header>
      <SignInPage />  
     </div>
  );
}
