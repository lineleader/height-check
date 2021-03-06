import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

interface InputProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  type: string;
  placeholder: string;
}

const Input = (props: InputProps) => {
  const { label, name, value, onChange, type, placeholder } = props;
  return (
    <InputGroup>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        autoFocus
      />
    </InputGroup>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  label: "",
  value: "",
  onChange: () => {},
  type: "text",
  placeholder: "",
};

export default Input;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
  font-size: 1.5rem;

  label {
    margin-bottom: 0.25rem;
  }

  input {
    font-size: 1.75rem;
  }
`;
