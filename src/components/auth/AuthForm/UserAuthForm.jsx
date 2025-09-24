import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { login, signup } from "../../../redux/auth/actions";
import { Mail, Lock, Eye, EyeOff, ArrowRight, User, LoaderCircle } from "lucide-react";

const signUpSchema = yup.object().shape({
  email: yup.string().email("Invalid email format").required("Email is required"),
  username: yup.string().required("Full name is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const signInSchema = yup.object().shape({
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export default function AuthForm({ isSignIn, toggleForm, redirectPath }) {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { status, error: authError } = useSelector((state) => state.auth);
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Clear errors when switching between sign-in and sign-up
    setErrors({});
    if (authError) {
      setErrors({ general: "Incorrect email or password." });
    }
  }, [isSignIn, authError]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // Clear previous errors

    const schema = isSignIn ? signInSchema : signUpSchema;

    try {
      await schema.validate(formData, { abortEarly: false });

      if (isSignIn) {
        await dispatch(login(formData.email, formData.password, "user"));
      } else {
        await dispatch(
          signup(formData.email, formData.username, "user", formData.password)
        );
      }
      navigate(redirectPath);
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const newErrors = {};
        err.inner.forEach((error) => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      } else {
        setErrors({ general: "Something went wrong. Please try again." });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
      {/* Google button */}
      <button
        type="button"
        className="w-[60%] mx-auto border border-white rounded-full py-3 flex items-center justify-center gap-2 text-[18px] text-opacity-80 font-aeonik hover:bg-white/10 transition text-white"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="w-5 h-5"
        />
        Log in with Google
      </button>

      <div className="flex items-center gap-4 text-[16px] font-grifter text-[#f2f2f2] text-opacity-80">
        <div className="flex-1 border-t border-[#f2f2f2] border-opacity-80" />
        <span>OR</span>
        <div className="flex-1 border-t border-[#f2f2f2] border-opacity-80" />
      </div>

      <h2 className="text-[24px] font-aeonik font-bold text-center text-[#f2f2f2]">
        {isSignIn ? "Log in" : "Create your account"}
      </h2>

      {/* Email input */}
      <div className="relative w-[60%] mx-auto">
        <Mail className="absolute left-4 top-3 text-white/50" size={18} />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className={`w-full bg-white/10 text-white pl-12 pr-4 py-3 rounded-xl placeholder-white/80 focus:outline-none focus:ring-2 ${
            errors.email ? "ring-red-500" : "focus:ring-cyan-400"
          }`}
        />
        {errors.email && <p className="text-red-400 text-xs mt-1 ml-1">{errors.email}</p>}
      </div>

      {!isSignIn && (
        <div className="relative w-[60%] mx-auto">
          <User className="absolute left-4 top-3 text-white/50" size={18} />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Full Name"
            className={`w-full bg-white/10 text-white pl-12 pr-4 py-3 rounded-xl placeholder-white/80 focus:outline-none focus:ring-2 ${
              errors.username ? "ring-red-500" : "focus:ring-cyan-400"
            }`}
          />
          {errors.username && <p className="text-red-400 text-xs mt-1 ml-1">{errors.username}</p>}
        </div>
      )}

      {/* Password input */}
      <div className="relative w-[60%] mx-auto">
        <Lock className="absolute left-4 top-3 text-white/50" size={18} />
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className={`w-full bg-white/10 text-white pl-12 pr-10 py-3 rounded-xl placeholder-white/80 focus:outline-none focus:ring-2 ${
            errors.password ? "ring-red-500" : "focus:ring-cyan-400"
          }`}
        />
        <button
          type="button"
          className="absolute right-4 top-3 text-white/50"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
        {errors.password && <p className="text-red-400 text-xs mt-1 ml-1">{errors.password}</p>}
      </div>

      {/* Confirm Password */}
      {!isSignIn && (
        <div className="relative w-[60%] mx-auto">
          <Lock className="absolute left-4 top-3 text-white/50" size={18} />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className={`w-full bg-white/10 text-white pl-12 pr-4 py-3 rounded-xl placeholder-white/80 focus:outline-none focus:ring-2 ${
              errors.confirmPassword ? "ring-red-500" : "focus:ring-cyan-400"
            }`}
          />
          {errors.confirmPassword && <p className="text-red-400 text-xs mt-1 ml-1">{errors.confirmPassword}</p>}
        </div>
      )}

      {isSignIn && (
        <div className="w-[60%] mx-auto text-right -mt-2">
          <button
            type="button"
            className="text-sm text-cyan-300 hover:underline"
            onClick={() => alert("Reset password flow to be implemented")}
          >
            Forgot Password?
          </button>
        </div>
      )}

      {/* General Error Message */}
      {errors.general && (
        <div className="text-sm text-red-400 text-center">{errors.general}</div>
      )}

      <div className="relative w-[60%] mx-auto pt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-white text-[#0f1b44] font-gilroy font-bold rounded-full py-3 px-6 shadow-md hover:bg-gray-100 transition disabled:opacity-50 flex items-center justify-center"
        >
          {status === "loading" ? (
            <LoaderCircle className="animate-spin" size={20} />
          ) : (
            <>
              <span className="block text-center">
                {isSignIn ? "Log in" : "Sign Up"}
              </span>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-[#0f1b44]">
                <ArrowRight size={16} className="text-white" />
              </div>
            </>
          )}
        </button>
      </div>

      <p className="text-[16px] text-center text-white/60">
        {isSignIn ? "Don’t have an account?" : "Already have an account?"}{" "}
        <button
          type="button"
          onClick={toggleForm}
          className="text-cyan-300 hover:underline font-aeonik"
        >
          {isSignIn ? "Sign Up" : "Log in"}
        </button>
      </p>
    </form>
  );
}
