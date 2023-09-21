const Form = ({submit, children }) => {
  return <form className="form" onSubmit={submit}>{children}</form>;
};
export default Form;
