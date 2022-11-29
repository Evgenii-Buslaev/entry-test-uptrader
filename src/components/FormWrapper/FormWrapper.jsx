import InputText from "../../UI/InputText/InputText";
import Form from "../Form/Form";

const FormWrapper = ({ data, type }) => {
  const { value, change, text, action, submit } = data;

  const projectComponents = [
    {
      element: (
        <InputText
          value={value}
          change={change}
          text="Project's title"
          key="Project's title"
        />
      ),
    },
  ];

  const todoCreateComponents = [
    {
      element: (
        <InputText
          value={value}
          change={change}
          text="Todo's title"
          key="Todo's title"
        />
      ),
    },
  ];

  const todoEditComponents = [
    {
      element: (
        <InputText
          value={value}
          change={change}
          text="Todo's description"
          key="Todo's description"
        />
      ),
    },
  ];

  let components;
  switch (type) {
    case "project":
      components = projectComponents;
      break;
    case "create_todo":
      components = todoCreateComponents;
      break;
    case "edit_todo":
      components = todoEditComponents;
    default:
      return null;
  }

  return <Form list={components} action={action} submit={submit} />;
};

export default FormWrapper;
