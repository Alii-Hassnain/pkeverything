import React from 'react';

const Input = ({ type, options, title, name, placeholder, handleClick }) => (
  <div className="mt-10 w-full ">
    <p className="font-poppins text-color font-semibold text-xl">{title}</p>
    {type === 'number' ? (
      <div className="input-styles flexBetween flex-row">
        <input
          type={type}
          name={name}
          className="flex w-full dark:bg-w-black-1 bg-w-grey-1 outline-none "
          placeholder={placeholder}
          onChange={handleClick}
        />
      </div>
    ) : type === 'textarea' ? (
      <div className="flex flex-row">
        <textarea
          rows={10}
          name={name}
          className="input-styles"
          placeholder={placeholder}
          onChange={handleClick}
        />
      </div>
    ) : type === 'select' ? (
      <select name={name} className="input-styles" onChange={handleClick}>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    ) : (
      <input
        className="input-styles"
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleClick}
      />
    )}
  </div>
);

export default Input;
