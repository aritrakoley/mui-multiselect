import {
  Autocomplete,
  Checkbox,
  TextField,
  createFilterOptions,
} from "@mui/material";

/*
> If an element of the options array is a simple string, 
the string itself will be considered as the option label.
Otherwise the element needs to be an object with a 'label' key.
*/

const Multiselect = (props) => {
  const {
    sx,
    fullWidth,
    id,
    label,
    limitTags,
    options,
    onChange,
    value
  } = props;

  const SELECT_ALL_LABEL = "Select All";
  const SELECT_ALL_VALUE = "__select-all__";
  const SELECT_ALL_OPTION = {
    label: SELECT_ALL_LABEL,
    value: SELECT_ALL_VALUE,
  };

  const allSelected = options.length === value.length;

  const getOptionLabel = (option) =>
    typeof option === "string" ? option : option.label;

  const renderInput = (params) => <TextField {...params} label={label} />;

  const isOptionEqualToValue = (option, value) => {
    return getOptionLabel(option) === getOptionLabel(value);
  };

  const removeSelectAllOption = (options) => {
    return options.filter((e) => e.value !== SELECT_ALL_VALUE);
  };

  const defaultFilter = createFilterOptions();

  const filterOptions = (options, params) => {
    const filteredResults = removeSelectAllOption(
      defaultFilter(options, params)
    );
    return filteredResults.length > 0
      ? [SELECT_ALL_OPTION, ...filteredResults]
      : [];
  };

  const renderOption = (props, option, { selected }) => {
    const selectAllProps =
      option.value === SELECT_ALL_VALUE ? { checked: allSelected } : {};
    return (
      <li {...props}>
        <Checkbox checked={selected} {...selectAllProps} />
        {getOptionLabel(option)}
      </li>
    );
  };

  const handleChange = (event, values, reason, details) => {
    console.log("Multiselect handleChange", { event, values, reason, details });

    const selectAll = details && details.option.value === SELECT_ALL_VALUE;

    if (selectAll) {
      if (allSelected) {
        console.log("Select all unchecked");
        onChange(event, []);
      } else {
        console.log("Select all checked");
        onChange(event, options);
      }
    } else {
      console.log("Select All NOT involved");
      onChange(event, values);
    }
  };

  console.log({ value, allSelected });
  return (
    <Autocomplete
      multiple
      disableCloseOnSelect
      size="small"
      getOptionLabel={getOptionLabel}
      renderOption={renderOption}
      renderInput={renderInput}
      isOptionEqualToValue={isOptionEqualToValue}
      filterOptions={filterOptions}
      /* modifiable with props */
      sx={sx}
      fullWidth={fullWidth}
      id={id}
      limitTags={limitTags}
      options={options}
      onChange={handleChange}
      value={value}
    />
  );
};

export default Multiselect;
