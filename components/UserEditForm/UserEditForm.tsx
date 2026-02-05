import { User, UserFormData } from "@/types/user";
import { useForm } from "react-hook-form";
import css from "./UserEditForm.module.css";

interface Props {
  user: User;
  onSave: (updatedData: UserFormData) => void;
  onCancel: () => void;
}

export default function UserEditForm({ user, onSave, onCancel }: Props) {
  // Using React Hook Form for efficient form state management and built-in validation to avoid unnecessary re-renders.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    defaultValues: {
      name: user.name,
      email: user.email,
      city: user.address.city,
    },
    mode: "onBlur",
  });
  return (
    <form onSubmit={handleSubmit(onSave)} className={css.form}>
      <div className="mb-3">
        <label>Name</label>
        <input
          {...register("name", { required: "Name is required" })}
          className={css.input}
          autoFocus
        />
        {errors.name && (
          <span className={css.error}>{errors.name.message}</span>
        )}
      </div>

      <div className="mb-3">
        <label>Email</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
          })}
          className={css.input}
        />
        {errors.email && (
          <span className={css.error}>{errors.email.message}</span>
        )}
      </div>

      <div className="mb-3">
        <label>City</label>
        <input
          {...register("city", { required: "City is required" })}
          className={css.input}
        />
      </div>

      <div className="flex gap-2">
        <button type="submit" className={css.saveBtn}>
          Save
        </button>
        <button type="button" onClick={onCancel} className={css.cancelBtn}>
          Cancel
        </button>
      </div>
    </form>
  );
}
