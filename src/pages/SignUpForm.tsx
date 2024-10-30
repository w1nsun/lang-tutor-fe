import { useState } from 'react';
import { Button } from '../components/Button';
import './SignUpForm.css';

type FormProps = {
  first_name?: string[];
  last_name?: string[];
  email?: string[];
  password?: string[];
};

type FormPropsNames = keyof FormProps;

export default function SignUpForm() {
  const [formErrors, setFormErrors] = useState<FormProps>({});

  const clearFormErrors = (propName?: FormPropsNames) => {
    if (propName) {
      setFormErrors((prevErrors: FormProps) => {
        console.log({ prevErrors });
        return { ...prevErrors, [propName]: undefined };
      });

      return;
    }

    setFormErrors({});
  };

  const changeInputHandler = (propName: FormPropsNames) => {
    return () => {
      if (formErrors[propName]) {
        console.log('clear', { propName, formErrors });
        clearFormErrors(propName);
        return;
      }

      console.log('not-clear', { propName });
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log({ e });

    new Promise((resolve, reject) => {
      setTimeout(() => {
        const errors = {
          first_name: ['Length should be less than 25'],
          email: ['Invalid email', 'Length should be more than 3'],
        };
        reject(errors);
      }, 1000);
    }).catch((errors) => {
      console.log({ errors });
      setFormErrors(errors);
    });
  };

  return (
    <div className="sign-up-form-container flex items-center justify-center">
      <div className="sign-up-form">
        <p className="form-title block mt-2 mb-2">Sign Up</p>
        <form className="block" onSubmit={handleSubmit}>
          <div
            className={`form-element ${
              formErrors.first_name ? 'validation-error' : ''
            }`}
          >
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              required
              data-field="first_name"
              onChange={changeInputHandler('first_name')}
            />
            {formErrors.first_name && (
              <ul className="errors">
                {formErrors.first_name.map((elErr, idx) => {
                  return <li key={idx}>{elErr}</li>;
                })}
              </ul>
            )}
          </div>
          <div
            className={`form-element ${
              formErrors.last_name ? 'validation-error' : ''
            }`}
          >
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              required
              data-field="last_name"
              onChange={changeInputHandler('last_name')}
            />
            {formErrors.last_name && (
              <ul className="errors">
                {formErrors.last_name.map((elErr, idx) => {
                  return <li key={idx}>{elErr}</li>;
                })}
              </ul>
            )}
          </div>
          <div
            className={`form-element ${
              formErrors.email ? 'validation-error' : ''
            }`}
          >
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              data-field="email"
              onChange={changeInputHandler('email')}
            />
            {formErrors.email && (
              <ul className="errors">
                {formErrors.email.map((elErr, idx) => {
                  return <li key={idx}>{elErr}</li>;
                })}
              </ul>
            )}
          </div>
          <div
            className={`form-element ${
              formErrors.password ? 'validation-error' : ''
            }`}
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
              data-field="password"
              onChange={changeInputHandler('password')}
            />
            {formErrors.password && (
              <ul className="errors">
                {formErrors.password.map((elErr, idx) => {
                  return <li key={idx}>{elErr}</li>;
                })}
              </ul>
            )}
          </div>
          <div className="flex mt-[20px] justify-end">
            <Button type="submit" variant="default">
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
