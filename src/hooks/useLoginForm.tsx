import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "../schemas/loginSchema";

export const useLoginForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      // Jalankan logika integrasi API login di sini nanti
      console.log(data);

      // Setelah login berhasil, arahkan ke halaman Create Post
      navigate("/create-post");
    } catch {
      setError("root", {
        message: "Email atau password salah. Silakan coba lagi.",
      });
    }
  };

  return { register, handleSubmit, onSubmit, errors, isSubmitting };
};
