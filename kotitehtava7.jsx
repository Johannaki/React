
  function Comment(props) {
    return (
      <div className="Comment">
        <div className="Comment-text">{props.text}</div>
      </div>
    );
  }

  const comment = {
    text: 'Periaatteesa tämä on helppoa.'
  };

  ReactDOM.render(
    <Comment text={comment.text}
    />,
    document.getElementById('root')
  );
