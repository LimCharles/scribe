import { signInWithGoogle, signInWithFacebook, auth } from "#lib/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/router";

export const getServerSideProps = async (context) => {
  if (auth.currentUser) {
    return {
      redirect: {
        destination: "/notes",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

const SignUp = () => {
  // Router
  const router = useRouter();

  // User Details
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  // Auth Error handling
  const [error, setError] = useState("");

  const handleError = (err) => {
    switch (err) {
      case "auth/invalid-email":
        setError("Invalid Email");
        break;
      case "auth/user-disabled":
        setError("User Disabled");
        break;
      case "auth/user-not-found":
        setError("User Not Found");
        break;
      case "auth/wrong-password":
        setError("Wrong Password");
        break;
      case "auth/too-many-requests":
        setError("Too Many Requests");
        break;
      default:
        setError("Error signing in");
        break;
    }
  };

  // Loading State
  const [loading, setLoading] = useState(false);

  // Log In Function
  const signUp = async () => {
    setLoading(true);
    await createUserWithEmailAndPassword(
      auth,
      userDetails.email,
      userDetails.password
    )
      .then((response) => {
        router.push("/notes");
      })
      .catch((err) => {
        setLoading(false);
        handleError(err);
        console.log(err);
      });
  };

  // Auth State Handling
  onAuthStateChanged(auth, (user) => {
    if (user) {
      router.push("/notes");
    }
  });

  return (
    <div className="flex flex-col h-screen w-screen items-center gap-[20%] p-8">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="184"
          height="51"
          fill="none"
        >
          <path
            fill="#3D3D3D"
            d="M43.54 37.238c-1.655 0-3.15-.283-4.488-.85-1.315-.567-2.357-1.383-3.128-2.448-.77-1.065-1.167-2.323-1.19-3.774h5.1c.068.975.408 1.745 1.02 2.312.635.567 1.496.85 2.584.85 1.11 0 1.983-.26 2.618-.782.635-.544.952-1.247.952-2.108 0-.703-.215-1.28-.646-1.734-.43-.453-.974-.805-1.632-1.054-.634-.272-1.518-.567-2.652-.884-1.541-.453-2.8-.895-3.774-1.326-.952-.454-1.78-1.122-2.482-2.006-.68-.907-1.02-2.108-1.02-3.604 0-1.406.351-2.63 1.054-3.672.703-1.043 1.689-1.836 2.958-2.38 1.27-.567 2.72-.85 4.352-.85 2.448 0 4.431.6 5.95 1.802 1.542 1.178 2.392 2.833 2.55 4.964H46.43c-.045-.816-.397-1.485-1.054-2.006-.634-.544-1.484-.816-2.55-.816-.93 0-1.677.238-2.244.714-.544.476-.816 1.167-.816 2.074 0 .634.204 1.167.612 1.598.43.408.952.748 1.564 1.02.635.25 1.519.544 2.652.884 1.541.453 2.8.907 3.774 1.36.975.453 1.814 1.133 2.516 2.04.703.906 1.054 2.097 1.054 3.57 0 1.27-.328 2.448-.986 3.536-.657 1.088-1.62 1.96-2.89 2.618-1.27.635-2.776.952-4.522.952Zm11.301-9.656c0-1.95.397-3.65 1.19-5.1.793-1.473 1.893-2.607 3.298-3.4 1.405-.816 3.015-1.224 4.828-1.224 2.335 0 4.261.59 5.78 1.768 1.542 1.156 2.573 2.788 3.094 4.896h-5.134c-.272-.816-.737-1.45-1.394-1.904-.635-.476-1.428-.714-2.38-.714-1.36 0-2.437.498-3.23 1.496-.793.975-1.19 2.369-1.19 4.182 0 1.79.397 3.185 1.19 4.182.794.975 1.87 1.462 3.23 1.462 1.927 0 3.185-.861 3.774-2.584h5.134c-.521 2.04-1.552 3.66-3.094 4.862-1.541 1.201-3.468 1.802-5.78 1.802-1.813 0-3.423-.397-4.828-1.19a8.653 8.653 0 0 1-3.298-3.4c-.793-1.473-1.19-3.185-1.19-5.134Zm26.437-6.494a6.735 6.735 0 0 1 2.38-2.346c.998-.567 2.131-.85 3.4-.85v4.998h-1.257c-1.496 0-2.63.351-3.4 1.054-.748.703-1.123 1.927-1.123 3.672V37h-4.76V18.164h4.76v2.924Zm11.4-5.168c-.838 0-1.54-.26-2.107-.782-.544-.544-.816-1.213-.816-2.006 0-.794.272-1.451.816-1.972.566-.544 1.27-.816 2.108-.816.838 0 1.53.272 2.074.816.566.521.85 1.178.85 1.972 0 .793-.284 1.462-.85 2.006-.544.521-1.236.782-2.074.782Zm2.347 2.244V37h-4.76V18.164h4.76Zm9.463 2.754c.612-.907 1.45-1.644 2.516-2.21 1.088-.567 2.323-.85 3.706-.85 1.609 0 3.06.396 4.352 1.19 1.315.793 2.346 1.927 3.094 3.4.771 1.45 1.156 3.14 1.156 5.066 0 1.927-.385 3.638-1.156 5.134-.748 1.473-1.779 2.618-3.094 3.434-1.292.816-2.743 1.224-4.352 1.224-1.405 0-2.641-.272-3.706-.816-1.043-.567-1.882-1.292-2.516-2.176V37h-4.76V11.84h4.76v9.078Zm9.962 6.596c0-1.133-.238-2.108-.714-2.924-.453-.839-1.065-1.474-1.836-1.904a4.82 4.82 0 0 0-2.448-.646 4.75 4.75 0 0 0-2.448.68c-.748.43-1.36 1.065-1.836 1.904-.454.838-.68 1.825-.68 2.958 0 1.133.226 2.12.68 2.958.476.839 1.088 1.485 1.836 1.938a4.94 4.94 0 0 0 2.448.646c.884 0 1.7-.227 2.448-.68.771-.453 1.383-1.1 1.836-1.938.476-.839.714-1.836.714-2.992Zm25.831-.34c0 .68-.045 1.292-.136 1.836h-13.77c.113 1.36.589 2.425 1.428 3.196.839.77 1.87 1.156 3.094 1.156 1.768 0 3.026-.76 3.774-2.278h5.134c-.544 1.813-1.586 3.31-3.128 4.488-1.541 1.156-3.434 1.734-5.678 1.734-1.813 0-3.445-.397-4.896-1.19-1.428-.816-2.55-1.96-3.366-3.434-.793-1.473-1.19-3.173-1.19-5.1 0-1.95.397-3.66 1.19-5.134.793-1.474 1.904-2.607 3.332-3.4 1.428-.794 3.071-1.19 4.93-1.19 1.791 0 3.389.385 4.794 1.156a7.97 7.97 0 0 1 3.298 3.298c.794 1.405 1.19 3.026 1.19 4.862Zm-4.93-1.36c-.023-1.224-.465-2.199-1.326-2.924-.861-.748-1.915-1.122-3.162-1.122-1.179 0-2.176.363-2.992 1.088-.793.702-1.281 1.688-1.462 2.958h8.942Zm31.058 6.664h-9.452L155.393 37h-4.998l8.534-23.766h5.542L173.006 37h-5.033l-1.564-4.522Zm-1.292-3.808-3.434-9.928-3.434 9.928h6.868Zm15.839-15.402V37h-4.761V13.268h4.761ZM20.106 6v16.942H0V6z"
          />
          <path
            fill="#3D3D3D"
            fillRule="evenodd"
            d="m6.093 36.215 3.96 7.5 3.96-7.5h-7.92Zm-.914-1.73h9.748l5.18-9.81H0l5.179 9.81Z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <div className="relative flex flex-col self-center gap-4 w-[350px]">
        {loading && (
          <div className="absolute top-[45%] right-[38%] bg-white rounded-xl shadow-xl flex flex-row items-center justify-center p-4">
            <div className="w-14 h-14 border-purple-200 border-2 rounded-full"></div>
            <div className="w-14 h-14 border-purple-700 border-t-2 animate-spin rounded-full absolute"></div>
          </div>
        )}
        <p className="text-center font-poppins text-3xl font-semibold text-text">
          Create your account!
        </p>
        <div className="flex flex-col gap-2">
          <input
            placeholder="Email address"
            type="email"
            onChange={(e) =>
              setUserDetails({
                ...userDetails,
                email: e.target.value,
              })
            }
            className="focus:outline-none border-[1px] border-[#737373] rounded-md px-7 font-poppins h-[60px]"
          />
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => {
              setUserDetails({
                ...userDetails,
                password: e.target.value,
              });
            }}
            className="focus:outline-none border-[1px] border-[#737373] rounded-md px-7 font-poppins h-[60px]"
          />

          <button
            className="p-4 bg-gradient-to-r from-primary to-secondary rounded-md h-[60px]"
            type="submit"
            onClick={() => signUp()}
          >
            <p className="text-white font-poppins">Continue</p>
          </button>
        </div>
        {error && (
          <p className="text-center text-red-500 font-poppins">{error}</p>
        )}
        <p className="text-center">
          Already have an account?
          <span
            className="text-primary cursor-pointer"
            onClick={() => router.push("/login")}
          >
            &nbsp;Log In
          </span>
        </p>
        <hr className="bg-black border-black" />
        <div className="flex flex-col gap-2">
          <button
            onClick={signInWithGoogle}
            className="flex flex-row justify-evenly border-[1px] border-[#737373] rounded-md p-4 items-center h-[60px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              viewBox="0 0 186.69 190.5"
            >
              <g transform="translate(1184.583 765.171)">
                <path
                  clipPath="none"
                  mask="none"
                  d="M-1089.333-687.239v36.888h51.262c-2.251 11.863-9.006 21.908-19.137 28.662l30.913 23.986c18.011-16.625 28.402-41.044 28.402-70.052 0-6.754-.606-13.249-1.732-19.483z"
                  fill="#4285f4"
                />
                <path
                  clipPath="none"
                  mask="none"
                  d="M-1142.714-651.791l-6.972 5.337-24.679 19.223h0c15.673 31.086 47.796 52.561 85.03 52.561 25.717 0 47.278-8.486 63.038-23.033l-30.913-23.986c-8.486 5.715-19.31 9.179-32.125 9.179-24.765 0-45.806-16.712-53.34-39.226z"
                  fill="#34a853"
                />
                <path
                  clipPath="none"
                  mask="none"
                  d="M-1174.365-712.61c-6.494 12.815-10.217 27.276-10.217 42.689s3.723 29.874 10.217 42.689c0 .086 31.693-24.592 31.693-24.592-1.905-5.715-3.031-11.776-3.031-18.098s1.126-12.383 3.031-18.098z"
                  fill="#fbbc05"
                />
                <path
                  d="M-1089.333-727.244c14.028 0 26.497 4.849 36.455 14.201l27.276-27.276c-16.539-15.413-38.013-24.852-63.731-24.852-37.234 0-69.359 21.388-85.032 52.561l31.692 24.592c7.533-22.514 28.575-39.226 53.34-39.226z"
                  fill="#ea4335"
                  clipPath="none"
                  mask="none"
                />
              </g>
            </svg>
            <p className="font-poppins text-lg">Continue with Google</p>
          </button>
          <button
            onClick={signInWithFacebook}
            className="flex flex-row justify-evenly border-[1px] border-[#737373] rounded-md p-4 items-center h-[60px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="25"
              zoomAndPan="magnify"
              viewBox="0 0 37.5 37.499999"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <defs>
                <clipPath id="699f79fdaa">
                  <path
                    d="M 0 0 L 37.007812 0 L 37.007812 37.007812 L 0 37.007812 Z M 0 0 "
                    clipRule="nonzero"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#699f79fdaa)">
                <path
                  fill="#ffffff"
                  d="M 0 0 L 37.5 0 L 37.5 45 L 0 45 Z M 0 0 "
                  fillOpacity="1"
                  fillRule="nonzero"
                />
                <path
                  fill="#ffffff"
                  d="M 0 0 L 37.5 0 L 37.5 37.5 L 0 37.5 Z M 0 0 "
                  fillOpacity="1"
                  fillRule="nonzero"
                />
                <path
                  fill="#ffffff"
                  d="M 0 0 L 37.5 0 L 37.5 37.5 L 0 37.5 Z M 0 0 "
                  fillOpacity="1"
                  fillRule="nonzero"
                />
              </g>
              <path
                fill="#1877f2"
                d="M 36.925781 18.597656 C 36.925781 8.519531 28.792969 0.347656 18.753906 0.347656 C 8.71875 0.347656 0.582031 8.519531 0.582031 18.597656 C 0.582031 27.707031 7.226562 35.257812 15.914062 36.625 L 15.914062 23.875 L 11.300781 23.875 L 11.300781 18.597656 L 15.914062 18.597656 L 15.914062 14.578125 C 15.914062 10.003906 18.628906 7.476562 22.78125 7.476562 C 24.769531 7.476562 26.847656 7.832031 26.847656 7.832031 L 26.847656 12.324219 L 24.554688 12.324219 C 22.296875 12.324219 21.59375 13.730469 21.59375 15.175781 L 21.59375 18.597656 L 26.632812 18.597656 L 25.828125 23.875 L 21.59375 23.875 L 21.59375 36.625 C 30.28125 35.257812 36.925781 27.707031 36.925781 18.597656 "
                fillOpacity="1"
                fillRule="nonzero"
              />
              <path
                fill="#ffffff"
                d="M 25.828125 23.875 L 26.632812 18.597656 L 21.59375 18.597656 L 21.59375 15.175781 C 21.59375 13.730469 22.296875 12.324219 24.554688 12.324219 L 26.847656 12.324219 L 26.847656 7.832031 C 26.847656 7.832031 24.769531 7.476562 22.78125 7.476562 C 18.628906 7.476562 15.914062 10.003906 15.914062 14.578125 L 15.914062 18.597656 L 11.300781 18.597656 L 11.300781 23.875 L 15.914062 23.875 L 15.914062 36.625 C 16.855469 36.773438 17.804688 36.847656 18.753906 36.847656 C 19.722656 36.847656 20.667969 36.773438 21.59375 36.625 L 21.59375 23.875 L 25.828125 23.875 "
                fillOpacity="1"
                fillRule="nonzero"
              />
            </svg>
            <p className="font-poppins text-lg">Continue with Facebook</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
