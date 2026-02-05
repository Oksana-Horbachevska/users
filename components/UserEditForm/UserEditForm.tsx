import { User, UserFormData } from "@/types/user";
import { useForm } from "react-hook-form";
import { userEditSchema } from "@/validation/userEditSchema";

import css from "./UserEditForm.module.css";
import { yupResolver } from "@hookform/resolvers/yup";

interface Props {
  user: User;
  onSave: (updatedData: UserFormData) => void;
  onCancel: () => void;
}

export default function UserEditForm({ user, onSave, onCancel }: Props) {
  // Using React Hook Form for efficient form state management
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: yupResolver(userEditSchema),
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
        <input {...register("name")} className={css.input} autoFocus />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <div className="mb-3">
        <label>Email</label>
        <input {...register("email")} className={css.input} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div className="mb-3">
        <label>City</label>
        <input {...register("city")} className={css.input} />
        {errors.city && <span>{errors.city.message}</span>}
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
