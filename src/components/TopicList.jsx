function TopicList(props) {
  return (
    <div>
      <h2 className="text-center mb-3">React Topics</h2>
      <ul className="list-group">
        {props.topics.map((topic) => (
          <li className="list-group-item" key={topic}>
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopicList;
