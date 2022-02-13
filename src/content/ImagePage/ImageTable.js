import React from 'react';
import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableExpandHeader,
  TableHeader,
  TableBody,
  TableExpandRow,
  TableCell,
  TableExpandedRow,
} from 'carbon-components-react';

const ImageTable = ({ rows, headers }) => {

  const getImageUrl = (rowId) => {
    const row = rows.find(({ id }) => id === rowId);
    return row ? row.primaryImage : '';
  };

  const getImageName = (rowId) => {
    const row = rows.find(({ id }) => id === rowId);
    return row ? row.objectName : '';
  };

  const getObjectName = (rowId) => {
    const row = rows.find(({ id }) => id === rowId);
    return row ? row.name : '';
  };

  const getArtist= (rowId) => {
    const row = rows.find(({ id }) => id === rowId);
    return row ? `${row.artistName} (${row.artistDisplayBio})`: '';
  };

  const getObjectDate= (rowId) => {
    const row = rows.find(({ id }) => id === rowId);
    return row ? row.objectDate : '';
  };

  const getMedium = (rowId) => {
    const row = rows.find(({ id }) => id === rowId);
    return row ? row.medium : '';
  };

  const getDimensions = (rowId) => {
    const row = rows.find(({ id }) => id === rowId);
    return row ? row.dimensions : '';
  };

  const getClassification= (rowId) => {
    const row = rows.find(({ id }) => id === rowId);
    return row ? row.classification : '';
  };

  const getCreditLine= (rowId) => {
    const row = rows.find(({ id }) => id === rowId);
    return row ? row.creditLine : '';
  };

  const getAccession= (rowId) => {
    const row = rows.find(({ id }) => id === rowId);
    return row ? row.accessionNumber : '';
  };

  return (
    <DataTable
      rows={rows}
      headers={headers}
      render={({
        rows,
        headers,
        getHeaderProps,
        getRowProps,
        getTableProps,
      }) => (
        <TableContainer
          title="Art Pieces"
          description="A collection of art">
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                <TableExpandHeader />
                {headers.map(header => (
                  <TableHeader {...getHeaderProps({ header })}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <React.Fragment key={row.id}>
                  <TableExpandRow {...getRowProps({ row })}>
                    {row.cells.map(cell => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableExpandRow>
                  <TableExpandedRow colSpan={headers.length + 1}>
                    <div class="bx--grid">
                      <div class="bx--row description">
                        <div class="bx--col-lg-10">
                          <p>
                            <span className="label">Title: </span>
                            <span>
                              {getObjectName(row.id)}
                            </span>
                          </p>
                          <p>
                            <span className="label">Artist: </span>
                            <span>
                              {getArtist(row.id)}
                            </span>
                          </p>
                          <p>
                            <span className="label">Date: </span>
                            <span>
                              {getObjectDate(row.id)}
                            </span>
                          </p>
                          <p>
                            <span className="label">Medium: </span>
                            <span>
                              {getMedium(row.id)}
                            </span>
                          </p>
                          <p>
                            <span className="label">Dimensions: </span>
                            <span>
                              {getDimensions(row.id)}
                            </span>
                          </p>
                          <p>
                            <span className="label">Classification: </span>
                            <span>
                              {getClassification(row.id)}
                            </span>
                          </p>
                          <p>
                            <span className="label">Credit Line: </span>
                            <span>
                              {getCreditLine(row.id)}
                            </span>
                          </p>
                          <p>
                            <span className="label">Accession Number: </span>
                            <span>
                              {getAccession(row.id)}
                            </span>
                          </p>
                        </div>
                        <div class="bx--col-lg-6">
                          <img className='image-table-img' src={getImageUrl(row.id)} alt={getImageName(row.id)}/>
                        </div>
                      </div>
                    </div>
                  </TableExpandedRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    />
  );
};

export default ImageTable;