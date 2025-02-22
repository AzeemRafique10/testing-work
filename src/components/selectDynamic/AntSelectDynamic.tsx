import "./styles.css";
import { Form, FormItemProps, Select, SelectProps } from "antd";

function AntSelectDynamic({
  size,
  data,
  label,
  style,
  isError,
  required,
  isLoading,
  fieldValue,
  fieldLabel,
  placeholder,
  optionsData,
  formItemProps,
  onSelectChange,
  fullWidth = true,
  showLabel = true,
  allowClear = true,
  showSearch = true,
  isColoredBg = false,
  ...restProps
}: TAntSelectDynamic) {
  const requiredProps = required
    ? {
        name,
        rules: [{ required: true, message: "" }],
      }
    : { name, rules: [] };

  //   const [mode] = useAtom(modeAtom)

  //   const classname = isColoredBg ? mode : mode === 'dark' ? 'dark' : '';

  return (
    // <Form.Item noStyle>
    //   {({}) => (
    //     <Form.Item
    //       {...requiredProps}
    //       {...formItemProps}
    //       style={{ marginBottom: 0, ...style }}
    //     >
    <Select
      loading={isLoading}
      allowClear={allowClear}
      showSearch={showSearch}
      placeholder={placeholder}
      //   dropdownStyle={{ backgroundColor: mode === 'dark' ? '#272d46' : '' }}
      //   className={fullWidth ? `fullWidth ${classname} ${restProps?.className}` : restProps?.className}
      filterOption={(input, option: any) => {
        return (option?.label ?? "")
          ?.toLowerCase()
          ?.includes(input?.toLowerCase());
      }}
      {...restProps}
    />
    //     </Form.Item>
    //   )}
    // </Form.Item>
  );
}

type TAntSelectDynamic = {
  data?: any;
  label?: string;
  isError?: boolean;
  required?: boolean;
  fieldValue: string;
  fieldLabel: string;
  showLabel?: boolean;
  fullWidth?: boolean;
  optionsData?: any[];
  isLoading?: boolean;
  isColoredBg?: boolean;
  onSelectChange?: (selectedObject: any) => void;
  formItemProps?: FormItemProps;
} & SelectProps;

export default AntSelectDynamic;
