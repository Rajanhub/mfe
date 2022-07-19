import React, { useEffect, useState } from "react";
import { createUnparsedSourceFile } from "typescript";
import "./style.css";

interface Props {
  tags?: any;
  onChange?: any;
  name?: string;
  placeholder?: any;
  isInvalid?: boolean;
}
const TagsInput: React.FunctionComponent<Props> = ({
  onChange,
  name,
  tags = [],
  placeholder,
  isInvalid,
}) => {
  const [tagData, setTagData] = useState<string[]>([]);
  const [value, setvalue] = useState<string>("");

  // useEffect(() => {
  //   if (tags) setTagData(tags);
  // }, []);

  const removeTagData = (indexToRemove) => {
    const newTag = [...tagData.filter((_, index) => index !== indexToRemove)];
    setTagData(newTag);
    onChange &&
      onChange({
        target: {
          name: name,
          value: newTag,
        },
      });
  };
  const removeLastTag = (event) => {
    const newTag = [...tagData];
    if (event.target.value) return;
    newTag.pop();
    setTagData(newTag);
    onChange &&
      onChange({
        target: {
          name: name,
          value: newTag,
        },
      });
  };
  const addTagData = (event) => {
    if (event.target.value !== "") {
      const newTag = [...tagData, event.target.value];
      setTagData(newTag);
      setvalue("");
      onChange &&
        onChange({
          target: {
            name: name,
            value: newTag,
          },
        });
      event.target.value = "";
    }
  };

  const handleChange = (e: any) => {
    const { value } = e.target;
    setvalue(value);
  };
  return (
    <div className={`tag-input ${isInvalid ? "invalid" : ""}`}>
      <ul className="tags">
        {console.log(tagData)}
        {tagData.map((tag, index) => (
          <li key={index} className="tag">
            <span className="tag-title">{tag}</span>
            <span
              className="tag-close-icon"
              onClick={() => removeTagData(index)}
            >
              x
            </span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={value}
        onKeyUp={(event) => (event.key === "Enter" ? addTagData(event) : null)}
        onKeyDown={(event) =>
          event.key === "Backspace" ? removeLastTag(event) : null
        }
        onChange={(e) => handleChange(e)}
        onBlur={(e) => addTagData(e)}
        placeholder={placeholder ? placeholder : "Enter a Tag"}
      />
    </div>
  );
};

export default TagsInput;
