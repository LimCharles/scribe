const DroppablePDF = (props) => {
  const { id, children, className } = props;

  return (
    <div id={id} className={className}>
      {children}
    </div>
  );
};
export default DroppablePDF;
