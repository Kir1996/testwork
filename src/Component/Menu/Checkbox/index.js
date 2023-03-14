
const Checkbox = ({
    label = "",
    onChange = () => {},
    checked = false,
    value = "",
  }) => {
    return (
      <label className="conteinerOject1">
        <span>{label}</span>
        <input
          className="checkbox"
          type="checkbox"
          onChange={onChange}
          value={value}
          checked={checked}
          />
      </label>
    );
};
export default Checkbox