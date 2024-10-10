import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Table from 'react-bootstrap/Table';
import { fetchFiles } from '../features/files/filesSlice';

export const FilesList = () => {
  const filesState = useSelector(state => state.files);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFiles());
  }, [dispatch]);

  return (
    <Table responsive striped bordered style={{ borderColor: '#969696' }}>
      <thead>
        <tr style={{ borderBottom: '1px solid gray' }}>
          <th>File Name</th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
        {filesState.rows.length > 0 ? (
          filesState.rows.map((row, i) =>
            row.lines.map((line, j) => (
              <tr key={`${i}-${row.file}-${j}`}>
                <td>{row.file}</td>
                <td>{line.text}</td>
                <td>{line.number}</td>
                <td>{line.hex}</td>
              </tr>
            ))
          )
        ) : (
          <tr>
            <td colSpan={4} className="text-center py-4">
              {filesState.status === 'pending' ? 'Loading...' : 'No results'}
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
