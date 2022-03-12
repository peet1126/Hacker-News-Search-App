export default function Stories({ data }) {
  return (
    <div className="Stories">
      <h1>Stories</h1>
      {data
        .filter((story) => story.title)
        .map((story) => (
          <a href={story.url && story.url} key={story.objectID}>
            <div className="story-list">
              <h2>{story.title}</h2>
              <p className="author">
                Author: {story.author} | Points: {story.points}
              </p>
              <p>{story.text}</p>
            </div>
          </a>
        ))}
    </div>
  );
}
