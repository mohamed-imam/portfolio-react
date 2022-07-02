import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
  };

  const confirmPassword = watch(["password", "confirmPassword"]);

  function validatePassword() {
    return confirmPassword[0] === confirmPassword[1] ? true : false;
  }

  const selectGender = [
    {
      value: 1,
      label: "Male",
    },
    {
      value: 2,
      label: "Female",
    },
  ];

  const selectHobbies = [
    {
      value: 1,
      label: "Coding",
    },
    {
      value: 2,
      label: "Swimmimg",
    },
    {
      value: 3,
      label: "Hiking",
    },
    {
      value: 4,
      label: "Surfing",
    },
  ];

  return (
    <div className='d-flex justify-content-center align-items-center flex-column '>
      <h2 className='my-5'>Create a new account</h2>
      <form className='border p-5 w-50' onSubmit={handleSubmit(onSubmit)}>
        <div className='email-wrapper input-group'>
          <input
            class='form-control'
            placeholder='User email'
            type='text'
            {...register("user_email", {
              required: true,
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              },
            })}
          />

          {errors.user_email && errors.user_email.type === "required" && (
            <p className='text-danger my-2'>User email is required</p>
          )}
          {errors.user_email && errors.user_email.type === "pattern" && (
            <p className='text-danger my-2'>Enter a valid email</p>
          )}
        </div>

        <div className='gender-wrapper my-5 input-group'>
          <Controller
            className='w-100'
            name='selectGender'
            control={control}
            {...register("gender", {
              required: true,
            })}
            render={({ field }) => (
              <ReactSelect
                {...field}
                options={selectGender}
                isSearchable
                placeholder='Select Gender'
              />
            )}
          />
        </div>

        <div className='gender-wrapper my-5 input-group'>
          <Controller
            className='w-100'
            name='selectHobbies'
            control={control}
            render={({ field }) => (
              <ReactSelect
                {...field}
                options={selectHobbies}
                isMulti
                isSearchable
                placeholder='Select Hobby'
              />
            )}
          />
        </div>

        <div className='phone-wrapper my-5 input-group'>
          <input
            class='form-control'
            placeholder='Phone'
            type='text'
            {...register("phone", {
              required: true,
              maxLength: 11,
            })}
          />

          {errors.phone && errors.phone.type === "required" && (
            <p className='text-danger my-2'>Phone is required</p>
          )}

          {errors.phone && errors.phone.type === "maxLength" && (
            <p className='text-danger my-2'>Phone max length is 11</p>
          )}
        </div>

        <div className='password-wrapper input-group'>
          <input
            class='form-control'
            placeholder='Password'
            type='password'
            {...register("password", {
              required: true,
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            })}
          />
          {errors.password && errors.password.type === "required" && (
            <p className='text-danger my-2'>Password is required</p>
          )}
          {errors.password && errors.password.type === "pattern" && (
            <p className='text-danger my-2'>Password not valid</p>
          )}
        </div>
        <br></br>
        <br></br>
        <div className='password-wrapper input-group'>
          <input
            class='form-control'
            placeholder='Confirm Password'
            type='password'
            {...register("confirmPassword", {
              validate: validatePassword,
            })}
          />
          {errors.confirmPassword &&
            errors.confirmPassword.type === "validate" && (
              <p className='text-danger my-2'>Password is not match</p>
            )}
        </div>

        <div className='submit-wrapper my-5 d-flex justify-content-center'>
          <button className='btn btn-primary btn-lg w-100' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
