function Logbuttons(props) {
  return (
    <button className={props.style} type={props.type}>
      {props.value}
    </button>
  );
}

export default Logbuttons;
