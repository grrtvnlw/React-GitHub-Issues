import React from 'react';

function Issue({issue}) {

  const { html_url, title, body } = issue;

  return (
    <div>
      <h3><a href={html_url} target="_blank">{title}</a></h3>
      <p>{body}</p>
    </div>
  );
}

export default Issue;