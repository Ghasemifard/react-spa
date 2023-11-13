
const Posts = (props) => {
    const id = props.match.params.id ||1;
    // console.log(props.match.params);
  return (
    <div>
      <h2>Post detail -{id}</h2>
      <div>{JSON.stringify(props.match.params)}</div>
    </div>
  );
};

export default Posts;
