import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import RHFSelect from "../../ui/RHFSelect";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";
import useCreateProject from "./useCreateProject";
import Loading from "../../ui/Loading";
function CreateProjectForm({ onClose }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());
  const { categories } = useCategories();
  const { isCreating, createProject } = useCreateProject();

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };
    createProject(newProject, {
      onSuccess: () => {
        onClose();
        reset();
      },
    });
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="عنوان "
        name="title"
        register={register}
        required
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: {
            value: 10,
            message: "طول عنوان نامعتبر است",
          },
        }}
        errors={errors}
      />
      <TextField
        label="توضیحات "
        name="description"
        register={register}
        required
        validationSchema={{
          required: "توضیحات ضروری است",
          minLength: {
            value: 15,
            message: "طول توضیحات نامعتبر است",
          },
        }}
        errors={errors}
      />
      <TextField
        label="بودجه "
        name="budget"
        type="number"
        register={register}
        required
        validationSchema={{
          required: "بودجه ضروری است",
        }}
        errors={errors}
      />
      <RHFSelect
        label="دسته بندی"
        name="category"
        register={register}
        options={categories}
        required
      />
      <div>
        <label className="mb-2 block text-secondary-700 ">تگ</label>
        <TagsInput
          value={tags}
          onChange={setTags}
          name="tags"
          classNames={{}}
        />
      </div>
      <DatePickerField date={date} setDate={setDate} label="ددلاین" />
      <div className="!mt-8">
        {isCreating ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
      </div>
    </form>
  );
}

export default CreateProjectForm;
