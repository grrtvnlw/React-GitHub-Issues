import React from 'react';

function Issue({issue}) {

  const { url, title, body } = issue;

  return (
    <div>
      <h3><a href={url}>{title}</a></h3>
      <p>{body}</p>
    </div>
  );
}

export default Issue;