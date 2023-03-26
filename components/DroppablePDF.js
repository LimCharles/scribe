const DroppablePDF = (props) => {
  const { id, children, className } = props;

  return <div className={className}>{children}</div>;
};
export default DroppablePDF;
