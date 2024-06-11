import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import RHFSelect from "../../ui/RHFSelect";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField";
function CreateProjectForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());

  const onSubmit = (data) => {
    console.log(data);
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
            value: 20,
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
            value: 20,
            message: "طول توضیحات نامعتبر است",
          },
        }}
        errors={errors}
      />
      <TextField
        label="بودجه "
        name="budget"
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
        options={[]}
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
      <button type="submit" className="btn btn--primary w-full">
        تایید
      </button>
    </form>
  );
}

export default CreateProjectForm;
