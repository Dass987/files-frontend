import React from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';

import { fetchFiles } from '../features/files/filesSlice';

export const FilesFilterInput = () => {
  const dispatch = useDispatch();

  const filterByName = e => {
    dispatch(fetchFiles(e.target.value));
  };

  return (
    <div className="mb-3">
      <Form.Control size="sm" placeholder="Search by file name..." aria-label="Search" aria-describedby="basic-addon1" onChange={filterByName} />
    </div>
  );
};
