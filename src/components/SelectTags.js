import React from 'react';
import { fetchTopic } from '../actions/fetch';
import withGlobalStore from './withGlobalStore';

function SelectTags({ globalStore: { tags, dispatch } }) {
  const handleSelectChange = e => {
    if (e.target.value) {
      fetchTopic(dispatch, e.target.value);
    } else {
      dispatch({ type: 'CLEAR_QUOTES' });
    }
  };

  return (
    <select onChange={handleSelectChange}>
      <option value=''>Select a Topic</option>
      {tags.map((tag, i) => (
        <option key={i} value={tag}>
          {tag}
        </option>
      ))}
    </select>
  );
}

export default withGlobalStore(SelectTags);
