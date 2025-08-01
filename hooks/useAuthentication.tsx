/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";

interface FormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface RegisterFormData extends FormData {
  firstName: string;
  lastName: string;
  acceptTerms: boolean;
  jobTitle: string;
  jobFunction: string;
  companyName: string;
}

interface AuthError {
  message: string;
  field?: string;
}

export const useAuthentication = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<AuthError[]>([]);

  const [loginFormData, setLoginFormData] = useState<FormData>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [registerFormData, setRegisterFormData] = useState<RegisterFormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    jobTitle: "",
    companyName: "",
    jobFunction: "",
    rememberMe: false,
    acceptTerms: false,
  });

  const router = useRouter();

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    // At least 6 characters, letters only
    const passwordRegex = /^[A-Za-z]{6,}$/;
    return passwordRegex.test(password);
  };

  const validateLoginForm = (): boolean => {
    const newErrors: AuthError[] = [];

    if (!loginFormData.email) {
      newErrors.push({ message: "Email is required", field: "email" });
    } else if (!validateEmail(loginFormData.email)) {
      newErrors.push({
        message: "Please enter a valid email address",
        field: "email",
      });
    }

    if (!loginFormData.password) {
      newErrors.push({ message: "Password is required", field: "password" });
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const validateRegisterForm = (): boolean => {
    const newErrors: AuthError[] = [];

    if (!registerFormData.firstName.trim()) {
      newErrors.push({ message: "First name is required", field: "firstName" });
    }

    if (!registerFormData.email) {
      newErrors.push({ message: "Email is required", field: "email" });
    } else if (!validateEmail(registerFormData.email)) {
      newErrors.push({
        message: "Please enter a valid email address",
        field: "email",
      });
    }

    if (!registerFormData.password) {
      newErrors.push({ message: "Password is required", field: "password" });
    } else if (!validatePassword(registerFormData.password)) {
      newErrors.push({
        message:
          "Password must be at least 6 characters with uppercase, lowercase",
        field: "password",
      });
    }

    if (!registerFormData.acceptTerms) {
      newErrors.push({
        message: "You must accept the terms and conditions",
        field: "acceptTerms",
      });
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  // Clear errors when user starts typing
  const clearFieldError = (fieldName: string) => {
    setErrors((prev) => prev.filter((error) => error.field !== fieldName));
  };

  // Login handler
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateLoginForm()) return;

    setIsLoading(true);
    setErrors([]);

    try {
      const response = await axios.post("/api/auth/login", {
        email: loginFormData.email,
        password: loginFormData.password,
        rememberMe: loginFormData.rememberMe,
      });

      // Store token if provided
      if (response.data.token) {
        localStorage.setItem("authToken", response.data.token);
      }

      console.log("Login successful:", response.data);
      router.push("/confluent-pricing");
    } catch (error: any) {
      console.error("Login failed:", error);
      const errorMessage =
        error.response?.data?.message || "Login failed. Please try again.";
      setErrors([{ message: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Register handler
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateRegisterForm()) return;

    setIsLoading(true);
    setErrors([]);

    try {
      const response = await axios.post("/api/auth/register", {
        email: registerFormData.email,
        password: registerFormData.password,
        firstName: registerFormData.firstName,
        lastName: registerFormData.lastName,
        jobTitle: registerFormData.jobTitle,
        companyName: registerFormData.companyName,
        rememberMe: registerFormData.rememberMe,
      });

      // Store token if provided
      if (response.data.token) {
        localStorage.setItem("authToken", response.data.token);
      }
      alert("Registration successfull");
      console.log("Registration successful:", response.data);
      router.push("/confluent-pricing");
    } catch (error: any) {
      console.error("Registration failed:", error);
      const errorMessage =
        error.response?.data?.message ||
        "Registration failed. Please try again.";
      setErrors([{ message: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Logout handler
  const handleLogout = useCallback(async () => {
    setIsLoading(true);

    try {
      await axios.post("/api/auth/logout");
      localStorage.removeItem("authToken");
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  // Forgot password handler
  const handleForgotPassword = async (email: string) => {
    if (!validateEmail(email)) {
      setErrors([
        { message: "Please enter a valid email address", field: "email" },
      ]);
      return;
    }

    setIsLoading(true);
    setErrors([]);

    try {
      await axios.post("/api/auth/forgot-password", { email });
      setErrors([{ message: "Password reset email sent successfully!" }]);
    } catch (error: any) {
      console.error("Forgot password failed:", error);
      const errorMessage =
        error.response?.data?.message ||
        "Failed to send reset email. Please try again.";
      setErrors([{ message: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Form change handlers
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    clearFieldError(name);

    setLoginFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    clearFieldError(name);

    setRegisterFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Reset forms
  const resetLoginForm = () => {
    setLoginFormData({
      email: "",
      password: "",
      rememberMe: false,
    });
    setErrors([]);
  };

  const resetRegisterForm = () => {
    setRegisterFormData({
      email: "",
      password: "",
      companyName: "",
      firstName: "",
      lastName: "",
      jobTitle: "",
      jobFunction: "",
      rememberMe: false,
      acceptTerms: false,
    });
    setErrors([]);
  };

  // Get error for specific field
  const getFieldError = (fieldName: string): string | undefined => {
    return errors.find((error) => error.field === fieldName)?.message;
  };

  // Get general errors (without field)
  const getGeneralErrors = (): string[] => {
    return errors.filter((error) => !error.field).map((error) => error.message);
  };

  return {
    // State
    showPassword,
    setShowPassword,
    isLoading,
    errors,
    loginFormData,
    registerFormData,

    // Handlers
    handleLogin,
    handleRegister,
    handleLogout,
    handleForgotPassword,
    handleLoginChange,
    handleRegisterChange,

    // Utilities
    resetLoginForm,
    resetRegisterForm,
    getFieldError,
    getGeneralErrors,
    validateEmail,
    validatePassword,
  };
};
