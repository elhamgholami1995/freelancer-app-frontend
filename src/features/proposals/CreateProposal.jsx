import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";

function CreateProposal({ onClose, projectId }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="توضیحات "
          name="description"
          register={register}
          required
          validationSchema={{
            required: "توضیحات ضروری است",
            minLength: {
              value: 10,
              message: "طول توضیحات نامعتبر است",
            },
          }}
          errors={errors}
        />
        <TextField
          label="قیمت "
          name="price"
          register={register}
          type="number"
          required
          validationSchema={{
            required: "قیمت ضروری است",
            minLength: {
              message: "طول قیمت نامعتبر است",
            },
          }}
          errors={errors}
        />
        <TextField
          label="مدت زمان "
          name="duration"
          register={register}
          required
          validationSchema={{
            required: "مدت زمان ضروری است",
            minLength: {
              message: "طول مدت زمان نامعتبر است",
            },
          }}
          errors={errors}
        />
        <div className="!mt-8">
          {0 ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CreateProposal;
