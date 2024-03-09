import React, { useEffect, useState } from "react";

const AdminLogin = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [isValidate, setIsValidate] = useState(false);

  const validation = (value) => {
    let newErr = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;

    if (!value.email) {
      newErr.email = "Email is required!";
    } else if (!emailPattern.test(value.email)) {
      newErr.email = "Invalid email format!";
    }

    if (!value.password) {
      newErr.password = "Password is required!";
    } else if (!passwordPattern.test(value.password)) {
      newErr.password =
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character!";
    }

    return newErr;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validation(input));
    setIsValidate(true);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setInput((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  useEffect(() => {
    if (Object.keys(error).length === 0 && isValidate) {
      postData();
    }
  }, [error, isValidate]);

  return (
    <div>
      <section class=" h-screen bg-[#ACAFBD] ">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-[#DBDFF0] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight">
                Sign in to your account
              </h1>
              <form
                onSubmit={handleSubmit}
                class="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    value={input.email}
                    onChange={handleChange}
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  ></input>
                  <p className="text-sm text-red-500">{error?.email}</p>
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    value={input.password}
                    onChange={handleChange}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  ></input>
                  <p className="text-sm text-red-500">{error?.password}</p>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      ></input>
                    </div>
                    <div class="ml-3 text-sm">
                      <label
                        for="remember"
                        class=" 
                        "
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a href="#" class="text-sm font-medium text-blue-500">
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  class="w-full bg-[#ACAFBD] font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Sign in
                </button>
                <p class="text-sm font-light ">
                  Don’t have an account yet?
                  <a href="#" class="font-medium  hover:underline ">
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminLogin;
