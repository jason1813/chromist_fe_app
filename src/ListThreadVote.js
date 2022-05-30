
function ListThreadVote(props) {
  return (
    <div
      className="listThreadVote"
      style={
        {
          height: 100,
          width: 40,
          display: "flex",
          flexDirection: "column",
          justifyContent: 'space-around',
          marginRight: 15,
          marginLeft: 8,
        }
      }
    >

      <img src={require('./up-arrow.png')}
        style={{
          width: 30,
          marginTop: 10,
          marginBottom: 0,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />

      <p style={{
        color: "black",
        minWidth: "100%",
        marginTop: 0,
        marginBottom: 0,
        fontSize: 17,
      }}>
        {props.upVoteScore}
      </p>

      <img src={require('./down-arrow.png')}
        style={{
          width: 30,
          marginTop: 0,
          marginBottom: 10,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
    </div>
  )
}

export default ListThreadVote;
