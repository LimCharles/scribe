import { useState } from "react";
import { auth } from "#lib/Firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import ChatBox from "#modules/ChatBox";

const Home = () => {
  // Router
  const router = useRouter();

  // Files
  const [files, setFiles] = useState([]);
  const [user, setUser] = useState("loading");

  const handleFileChange = (file) => {
    setFiles([...files, file]);
  };

  const fileTypes = ["PDF"];

  const onDelete = (fileName) => {
    const newFiles = files.filter((file) => file.name !== fileName);
    setFiles(newFiles);
  };

  // Auth
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        //
      })
      .catch((err) => {
        console.log(err);
      });
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  return (
    <div className="h-screen w-screen overflow-x-hidden">
      {user == "loading" ? (
        <div className="w-full h-full flex flex-row items-center justify-center">
          <div className="relative">
            <div className="w-20 h-20 border-purple-200 border-2 rounded-full"></div>
            <div className="w-20 h-20 border-purple-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col items-start h-[100%] justify-between">
          <div className="w-full flex flex-row items-center justify-evenly justify-self-start border-b-[1px] py-5">
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
            <div className="flex flex-row text-primary font-quicksand text-lg font-bold gap-12 ">
              {user ? (
                <>
                  <a
                    className="rounded-md px-3 py-3 font-normal cursor-pointer transition-all font-poppins flex justify-center items-center"
                    onClick={() => {
                      handleSignOut();
                    }}
                  >
                    Log Out
                  </a>

                  <a
                    className="rounded-2xl px-10 py-3 cursor-pointer transition-all font-poppins bg-primary text-white flex justify-center items-center"
                    href="/notes"
                  >
                    Use Scribe
                  </a>
                </>
              ) : (
                <>
                  <a
                    className="rounded-md px-3 py-3 font-normal cursor-pointer transition-all font-poppins flex justify-center items-center"
                    href="/login"
                  >
                    Log In
                  </a>

                  <a
                    className="rounded-2xl px-10 py-3 cursor-pointer transition-all font-poppins bg-primary text-white flex justify-center items-center"
                    href="/signup"
                  >
                    Try Scribe
                  </a>
                </>
              )}
            </div>
          </div>
          <div className="w-full h-full flex flex-row items-center justify-center gap-48">
            <div className="flex flex-col justify-between gap-7">
              <p className="font-poppins text-4xl font-bold leading-relaxed text-text">
                Automatic Notes for <br />
                Lengthy Readings
              </p>
              <p className="font-poppins text-4xl text-light text-text">
                Don't worry, it's Free
              </p>
              <button
                onClick={() => {
                  if (user) {
                    router.push("/notes");
                  } else {
                    router.push("/signup");
                  }
                }}
                className="bg-gradient-to-r from-primary to-secondary text-white font-poppins rounded-xl w-fit px-12 py-4 text-xl font-semibold"
              >
                Try Scribe
              </button>
            </div>

            <ChatBox />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
