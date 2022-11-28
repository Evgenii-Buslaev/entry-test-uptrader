import InputText from "../../UI/InputText/InputText";
import Form from "../Form/Form";

const FormWrapper = ({ data }) => {
  const { value, change, text, action, submit } = data;

  const formComponents = [
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

  return <Form list={formComponents} action={action} submit={submit} />;
};

export default FormWrapper;
