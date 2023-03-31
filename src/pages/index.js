import { motion } from "framer-motion";
import { useUser } from "@auth0/nextjs-auth0/client";

const Home = () => {
  const { user, error, isLoading } = useUser();
  return (
    <motion.div className="h-screen w-screen">
      <div className="w-full flex flex-col py-5 items-start bg-hover h-[80%] px-[10%] gap-32 justify-between">
        <div className="w-full flex flex-row items-center justify-between">
          <div>
            <p className="text-3xl text-primary font-cairo">Scribe</p>
          </div>
          <div className="flex flex-row text-primary font-quicksand text-lg font-bold gap-12">
            {user ? (
              <a
                className="rounded-md px-4 py-2 cursor-pointer transition-all font-quicksand hover:bg-secondary hover:text-hover flex justify-center items-center"
                href="/api/auth/logout"
              >
                SIGN OUT
              </a>
            ) : (
              <>
                <a
                  className="rounded-md px-4 py-2 cursor-pointer transition-all font-quicksand hover:bg-secondary hover:text-hover flex justify-center items-center"
                  href="/api/auth/login"
                >
                  SIGN IN
                </a>
                <a
                  className="rounded-md px-4 py-2 cursor-pointer transition-all font-quicksand hover:bg-secondary hover:text-hover flex justify-center items-center"
                  href="/api/auth/signup"
                >
                  SIGN UP
                </a>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-16 items-center">
          <p className="text-6xl font-quicksand">
            Introducing Scribe. <br /> Extract information at the speed of
            thought.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
