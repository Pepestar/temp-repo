import "./styles.css";

interface TextInputProps {
  searchValue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput: React.FC<TextInputProps> = ({ searchValue, handleChange }) => {
  return (
    <input
      className="text-input"
      value={searchValue}
      onChange={handleChange}
      type="search"
      placeholder="Type your search"
    />
  );
};
