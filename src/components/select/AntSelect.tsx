import { Select, Space } from "antd";
import "./AntSelect.css";

const OPTIONS = [{ value: "apple" }, { value: "banana" }, { value: "peach" }];

const AntSelect: React.FC<TSelectProps> = ({
  size,
  style,
  label,
  value,
  status,
  prefix,
  required,
  showSearch,
  isLoading,
  mode = "multiple",
  allowClear = false,
  placeholder,
}) => {
  return (
    <Space direction="vertical" style={{ ...style }}>
      <div className="select-container">
        {label ? (
          <label className="floating-label">
            {label}{" "}
            {required ? <span style={{ color: "#ff4d4f" }}>*</span> : ""}
          </label>
        ) : null}
        {/* {label && <label className="floating-label">{label}</label>} */}
        <Select
          size={size}
          allowClear={allowClear}
          mode={mode}
          placeholder={placeholder}
          style={style}
          options={OPTIONS}
          value={value}
          status={status}
          prefix={prefix}
          loading={isLoading}
          showSearch={showSearch}
        />
      </div>
    </Space>
  );
};

type TSelectProps = {
  size?: "small" | "middle" | "large";
  style?: React.CSSProperties;
  mode?: "multiple" | "tags";
  allowClear?: boolean;
  options?: { value: string }[];
  placeholder?: string;
  label?: string;
  value?: string | string[];
  status?: "error" | "warning";
  prefix?: React.ReactNode;
  required: boolean;
  showSearch: boolean;
  isLoading: boolean;
};

export default AntSelect;
